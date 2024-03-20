import React from "react";

export default function CardWeather({src,data,metric,children}) {
  return (
    <div className="w-[100px] h-[100px] flex flex-col items-center justify-center">
      <img src={src} alt="#" height={60} width={60}/>
      <h1 className=" font-bold text-blue-400">
        {children}
      </h1>
      <h1>{data} {metric}</h1>
    </div>
  );
}
