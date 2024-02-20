'use client'
import React from 'react'
import {BsSunrise,BsSunset} from 'react-icons/bs'
import { GetSunTime } from '../lib/GetSunTime'
import { getAllData } from "../lib/getAllData";
import { useQuery } from '@tanstack/react-query';
import {Spinner} from "@nextui-org/spinner";
import CartData from './CartData';
export default function Weaser({text}) {
  const { data,isLoading, error} = useQuery({
    queryKey:["eather", text],
    queryFn: async () => {
      return await getAllData(text)
    }
  })
  console.log(data)
  if(isLoading) {
    return(
         <div>
            <Spinner size='lg'/>
         </div>
    )
  }
  if(error) {
    return (
      <h1 className='text-[30px] font-bold'>
        Такого города нет
      </h1>
    )
  }
  return (
  <>
            <article className='flex flex-col'>
                <h1 className='text-[80px] text-blue-400 font-medium  '>
                {isNaN(data?.main?.temp)?'' : Math.round(data?.main?.temp) + " °С"}
                </h1>
              <div className=''>
              <p className='pb-[20px]'>Ощущается как: {data?.main?.feels_like}</p>
                <div className='flex items-center'>
                <BsSunrise size={40}/>
                <p className='pl-[15px]'>Солнце встало: {GetSunTime(data?.sys?.sunrise)}</p>
                </div>
               <div className='flex items-center'>
               <BsSunset size={40}/>
               <p className='pl-[15px]'>Солнце село: {GetSunTime(data?.sys?.sunset)}</p>
               </div>
              </div>
            </article>
            <article className='flex px-[30px]  items-center flex-col'>
               <h1 className='pb-[20px] text-[22px] font-medium'>
                {data?.name}
               </h1>
              <img  src={`/${data?.weather[0]?.icon}.png`} alt="Погода" /> 
              <h1 className='pb-[25px] text-[30px] font-medium'>{data?.weather[0].main}</h1>
            </article>
            <article className='grid grid-cols-2 place-content-center gap-7'>
                <CartData src={'/humidity.png'} data={data?.main?.humidity}>
                      Влажность
                </CartData>
                <CartData src={'/wind.png'} data={data?.wind?.speed}>
                        Ветер
                </CartData>
                <CartData src={'/pressure-white.png'} data={data?.main?.pressure}>
                        Давление
                </CartData>
                <CartData src={'/uv-white.png'} data={data?.weather?.main}>
                        UV
                </CartData>
            </article>
 </>
  )
}
// 1 /humidity.png
// data?.main?.humidity
// Влажность
// 2/wind.png
// data?.wind?.speed
// Ветер
// 3/pressure-white.png
// data?.main?.pressure
// Давление
// 4 /uv-white.png
// data?.weather?.main
// UV