import React from "react";
import Image from "next/image";
export default function CardWeather({src,data,metric,children}) {
  return (
    <div className="w-[100px] h-[100px] flex flex-col items-center justify-center">
      <Image src={src} alt={metric} height={60}  width={60}/>
      <h1 className=" font-bold text-blue-400">
        {children}
      </h1>
      <div className="flex">
        <h1>{data}</h1>
        <h1>{metric}</h1>
      </div>
    </div>
  );
}
