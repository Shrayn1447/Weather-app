'use client'
import React, { useEffect,useState,memo } from 'react'
export default memo(function Time() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           const Interval = setInterval(() => setDateState(new Date()), 10000);
           return () => {
            clearInterval(Interval)
           }
    }, []);
  return (
    <div className='text-white text-5xl font-medium mt-[100px] flex justify-center '>{dateState.toLocaleDateString('ru-US', {
        hour:'numeric',
        minute:'numeric'})}
    </div>
  )
})


