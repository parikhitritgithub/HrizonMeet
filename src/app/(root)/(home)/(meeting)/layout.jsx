import React, {ReactNode } from 'react'

const  RootLayout = ({children})  =>  {
  return (
    <main>  
        {children}
        Footer 
    </main>
  )
}

export default RootLayout
