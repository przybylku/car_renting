import Link from "next/link";


export default function Failed(){
    return (
        <>
            <div className="flex flex-col w-full lg:h-[69vh] md:h-[40vh] h-[50vh] align-middle justify-center content-center">
                <h1 className="text-[2rem] text-center text-red-600 font-bold">Niestety, coś poszło nie tak.</h1>
                <p className="text-center" >Wystąpił problem z płatnością.</p>
                <p className=" text-blue-600 text-center"><Link href={'/'}>Wróć do strony głównej</Link></p>
            </div>
        </>
    )
}