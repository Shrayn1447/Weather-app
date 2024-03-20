"use client";
import * as React from "react";
import { DateTime } from "luxon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { months } from "../lib/months";
export default function Last5Weather({ data }) {
  const dailyData = data.reduce((acc, cur) => {
    // Получаем дату из временной метки
    const date = new Date(cur.dt * 1000);
    const dateString = date.toISOString().split('T')[0]; // Преобразование даты в строку формата 'YYYY-MM-DD'
  
    // Проверяем, есть ли уже объект для данной даты в аккумуляторе
    if (!acc[dateString]) {
      // Если нет, добавляем текущий объект в аккумулятор
      acc[dateString] = cur;
    } else {
      // Если объект уже есть, сравниваем временные метки и заменяем объект, если текущий объект более поздний
      if (cur.dt > acc[dateString].dt) {
        acc[dateString] = cur;
      }
    }
  
    return acc;
  }, {});
  const dailyDataArray = Object.values(dailyData);

 
  return (
    <>
      <h1 className="text-2xl font-medium mt-[10px]">
        Прогноз погоды на 5 дней
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-2xl  flex items-center text-black"
      >
        <CarouselContent>
          {dailyDataArray.map((item, index) => {
            const time = DateTime.fromFormat(
              item.dt_txt,
              "yyyy-MM-dd HH:mm:ss"
            );
            return (
              <CarouselItem
                key={index}
                className=" text-white basis-1/3 mt-[20px]"
              >
                <div className="p-4 flex flex-col justify-center items-center h-[250px] border border-white/20 rounded-lg">
                  <img src={`/${item?.weather[0]?.icon}.png`} alt="Погода" />
                  <h4 className="text-3xl text-blue-400 font-medium">
                    {item?.main?.temp !== undefined &&
                      `${
                        Math.round(item?.main?.temp) > 0
                          ? "+" + Math.round(item?.main?.temp)
                          : Math.round(item?.main?.temp)
                      }`}
                  </h4>
                
                    <p className="text-2xl">
                      {time.day} {months[time.month - 1]}
                    </p>
                  
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
