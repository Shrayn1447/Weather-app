import React from "react";
import CardWeather from "./CardWeather";
export default function CardsWeatherInfo({ data }) {
  return (
    <>
      <CardWeather
        src="/humidity.png"
        data={data?.main?.humidity}
        metric="гр/м"

      >
        Влажность
      </CardWeather>
      <CardWeather src="/wind.png" data={data?.wind?.speed} metric="м/c" >
        Ветер
      </CardWeather>
      <CardWeather
        src="/pressure-white.png"
        data={data?.main?.pressure}
        metric="мм рт"

      >
        Давление
      </CardWeather>
      <CardWeather src="/uv-white.png" data={data?.weather?.main} >
        UV
      </CardWeather>
    </>
  );
}
