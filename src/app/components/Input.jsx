'use client'
import React from "react";
export default function Input({handler}) {
  function handleNameChange(event) {
    handler(event.target.value)
  }
  return (
      <div className="flex  justify-center pt-[65px]">
      <label>
          <input
          name="input"
          className="text-white bg-[#1b1a1d] rounded p-[4px] pl-[20px] text-[22px] max-w-[800px] h-[45px] focus:outline-none"
          placeholder="Введите город"
          maxLength={20}
          onChange={handleNameChange}
          type="text"
          />
      </label>
    </div>

  );
}