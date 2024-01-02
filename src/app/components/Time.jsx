'use client'
import React, { useEffect,useState } from 'react'
export default function Time() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 10000);
    }, []);
  return (
    <div className='text-white text-5xl font-medium mt-[100px] flex justify-center '>{dateState.toLocaleDateString('ru-US', {
        hour:'numeric',
        minute:'numeric'})}
    </div>
  )
}


