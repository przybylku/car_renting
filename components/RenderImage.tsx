"use client"


import React, { useEffect, useState } from 'react'
import Image from 'next/image'
function RenderImage({ url, height, width, alt = "Car Renting Image", sizes = "", wfull }: {url: string, height?: number, width?: number, alt?: string, sizes?: string, wfull?: boolean}) {
   const [show, setShow] = useState<boolean>(false)
   const [height_, setHeight] = useState(height)
   const [width_, setwidth] = useState(width)
   useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 1000)
    if(wfull){
    setwidth(window.innerWidth)
    setHeight(window.innerHeight)
   }else if(!wfull && (!height || !width)){
    console.error("nie podano informacji o wymiarach")
   }
    return () => {
      clearTimeout(timeout)
    }
   }, [])

   

  return (
    <>{show ? (
    <Image
    src={url}
    alt={alt}
    width={width_}
    height={height_}
    sizes={sizes ? sizes : ""}
    />) : <>Loading</>
    } </>
  )
}

export default RenderImage