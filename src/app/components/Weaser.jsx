import React, { memo, useEffect, useState } from "react";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { GetSunTime } from "../lib/GetSunTime";
import { useQuery } from "../components/Providers";
import CardsWeatherInfo from "./CardsWeatherInfo";
import Last5Weather from "./Last5Weather";
import axios from "axios";
import debounce from "debounce";

export default function Weather() {
  const [text] = useQuery();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userCoords, setUserCoords] = useState(null);
  const [weather5List, setWeather5] = useState(null);
  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserCoords({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Ошибка при получении координат:", error);
          }
        );
      } else {
        console.error("Geolocation не поддерживается данным браузером");
      }
    };
    getUserLocation();
  }, []);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        setError(false)
        setLoading(true);
        let last5 = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lang=ru&appid=e3e94eeabc7824d0e5310a9b31cfa153`;
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&appid=e3e94eeabc7824d0e5310a9b31cfa153`;
        if (userCoords && text === "") {
          apiURL += `&lat=${userCoords.lat}&lon=${userCoords.lon}`;
          last5 += `&lat=${userCoords.lat}&lon=${userCoords.lon}`;
        } else {
          apiURL += `&q=${text}`;
          last5 += `&q=${text}`;
        }

        const [response, responseLast5] = await Promise.all([
          axios.get(apiURL, {
            cancelToken: cancelTokenSource.token,
          }),
          axios.get(last5, {
            cancelToken: cancelTokenSource.token,
          }),
        ]);
        setWeather5(responseLast5.data.list);
        setData(response.data);
      } catch (error) {
        console.log('Ошибка')
        setError(true)
      } finally {
        setLoading(false);
      }
    };

    const debouncedFetchData = debounce(fetchData, 600);
    debouncedFetchData();
    return () => {
      cancelTokenSource.cancel("Отмена запроса");
    };
  }, [text, userCoords]);

  if (isLoading || !data) {
    return <div className="text-3xl font-bold">Поиск...</div>;
  }

  if (error) {
    return <div className="text-3xl font-bold">Ничего не найдено</div>;
  }
    return (
      <>
         <section className="flex justify-between gap-[20px] w-full">
           <div className="flex flex-col">
             <h1 className="text-6xl text-blue-400 font-medium">
               {data?.main?.temp !== undefined &&
                 `${Math.round(data?.main?.temp)} °C`}
             </h1>
             <div>
               <p className="pb-4">Ощущается как: {Number(data?.main?.feels_like).toFixed(0)}</p>
               <div className="flex items-center pb-4">
                 <BsSunrise size={40} />
                 <p className="pl-4">
                   Солнце взошло: {GetSunTime(data?.sys?.sunrise)}
                 </p>
               </div>
               <div className="flex items-center">
                 <BsSunset size={40} />
                 <p className="pl-4">
                   Солнце село: {GetSunTime(data?.sys?.sunset)}
                 </p>
               </div>
             </div>
           </div>
           <div className="flex flex-col px-4 items-center">
             <h1 className="pb-4 text-3xl font-medium">{data?.name}</h1>
             <img src={`/${data?.weather[0]?.icon}.png`} alt="Погода" />
             <h1 className="pb-4 text-3xl font-medium">
               {data?.weather[0]?.main}
             </h1>
           </div>
           <div className="grid grid-cols-2 place-content-center gap-7 px-4">
             <CardsWeatherInfo data={data}/>
           </div>
         </section>
             <Last5Weather data={weather5List}/>
      </>
     );
  
}
