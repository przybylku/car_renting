import Link from "next/link";


export default function Success(){
    return (
        <>
            <div className="flex flex-col w-full lg:h-[69vh] md:h-[40vh] h-[50vh] align-middle justify-center content-center">
                <h1 className="text-[2rem] text-center text-green-400 font-bold">Udało się!</h1>
                <p className="text-center" >Twoje zamówienie jest przetwarzane!</p>
                <p className=" text-blue-600 text-center"><Link href={'/'}>Wróć do strony głównej</Link></p>
            </div>
        </>
    )
}