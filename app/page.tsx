import dynamic from 'next/dynamic'
import { Suspense } from 'react';
const Image = dynamic(() => import('@/components/RenderImage'))

export default function HomePage() {
  return (
    <main className='relative flex w-full'>
      <div className="flex w-full flex-1 flex-col">
        <h1 className='font-extrabold uppercase text-white text-[80px] px-4 mt-16 drop-shadow' style={{textShadow: "5px 5px 35px black"}}>Rent your deam car!</h1>
        <h2 className='font-light uppercase text-white text-[40px] px-4 mt-[-5px]' style={{textShadow: "5px 5px 15px black"}}>check out cars</h2>
        <div className="flex flex-row flex-nowrap w-[25%]">
          <div className="basis-1/2 text-center bg-palette-100 ml-[20px] rounded px-11 text-[20px]">kup</div>
          <div className="basis-1/2 text-center">wynajmij</div>
        </div>
      </div>
      <div className="absolute top-[0px] -z-10"><Image url='/3.jpg' wfull={true} /></div>
      
      
    </main>
  );
}
