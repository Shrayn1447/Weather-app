'use client'
import Input from "./components/Input";
import Weaser from "./components/Weaser";
import { useState } from "react";
import Time from "./components/Time";
export default function Home() {
  const [text,setText] = useState('')
  function handleNameChange(text) {
    setText(text)
  }
  return (
    <div className="bg  bg-no-repeat bg-fixed bg-center bg-cover h-[100vh]">
       <header>
          <Input handler={handleNameChange}/>
       </header>
      <main>
        <section>
          <Weaser text={text}/>
        </section>
        <section>
          <Time/>
        </section>
      </main>
    </div>
  );
}
