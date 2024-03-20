"use client";
import Input from "./components/Input";
import Weaser from "./components/Weaser";
import Time from "./components/Time";
export default function Home() {
  return (
    <div className="bg-[#101014] overflow-hidden text-white flex flex-col gap-4 items-center transition-all  bg-no-repeat bg-fixed bg-center bg-cover h-screen">
      <Input />
      <main className=" p-[40px_25px] w-[900px] min-h-[600px] flex flex-col items-center justify-center text-white   bg-[#1b1a1d]  rounded-xl">
       <Weaser />
      </main>
    </div>
  );
}
