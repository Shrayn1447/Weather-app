// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'

export function ProviderUI({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}