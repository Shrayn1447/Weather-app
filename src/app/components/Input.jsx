'use client'
import React from "react";
import { useQuery } from "./Providers";
export default function Input() {
 const [_,setText] = useQuery()
  return (
      <div className="flex  justify-center pt-[65px]">
      <label>
          <input
          name="input"
          className="text-white bg-[#1b1a1d] rounded p-[4px] pl-[20px] text-[22px] max-w-[800px] h-[45px] focus:outline-none"
          placeholder="Введите город"
          maxLength={20}
          onChange={(e) => {
            setText(e.target.value)
          }}
          type="text"
          />
      </label>
    </div>

  );
}
