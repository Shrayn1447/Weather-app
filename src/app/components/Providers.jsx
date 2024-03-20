'use client'
import React, { useState, useContext,createContext } from 'react'

const DataContext = createContext()

export default function Providers({children}) {
    const [text, setText] = useState('')
  return (
    <DataContext.Provider value={[text, setText]}>
        {children}
    </DataContext.Provider>
  )
}
export  function useQuery() {
    const [text,setText] = useContext(DataContext)
    return [
        text,
        setText
    ]
}
