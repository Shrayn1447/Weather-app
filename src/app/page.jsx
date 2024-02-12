"use client";
import Input from "./components/Input";
import Weaser from "./components/Weaser";
import { useState } from "react";
import Time from "./components/Time";
export default function Home() {
  const [text, setText] = useState("");
  function handleNameChange(text) {
    setText(text);
  }
  return (
    <div className="bg-[#101014]  bg-no-repeat bg-fixed bg-center bg-cover h-screen">
      <Input handler={handleNameChange} />
      <main className="flex justify-center pt-[40px]">
        <section className="p-[40px_25px]  max-w-[800px] flex justify-between text-white  shadow-2xl bg-[#1b1a1d]  rounded-xl">
          <Weaser text={text} />
        </section>
      </main>
      <Time />
    </div>
  );
}
