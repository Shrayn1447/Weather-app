import React from "react";

export default function CartData({src,data,metric,children}) {
  return (
    <div className="w-[100px] h-[100px] flex flex-col items-center justify-center">
      <img src={src} alt="#" />
      <h1>{data} {metric}</h1>
      <h1>
        {children}
      </h1>
    </div>
  );
}
