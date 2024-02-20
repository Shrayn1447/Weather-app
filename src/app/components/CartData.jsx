import React from "react";

export default function CartData({src,data,children}) {
  return (
    <div className="w-[100px] h-[100px] flex flex-col items-center justify-center">
      <img src={src} alt="#" />
      <h1>{data} м/с</h1>
      <h1>
        {children}
      </h1>
    </div>
  );
}
