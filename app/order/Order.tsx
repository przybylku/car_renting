"use client"
import { useEffect, useState } from "react"
import { useAppSelector } from "../store"
import { orderType, selectOrder } from "../store/featues/orderSlice"
import OrderStatus from "@/components/OrderStatus";
import OrderSVG from "./[svg]/orderSvg";
import FiltredList from "@/components/FiltredList";
import DriverFormHook, { PaymentForm } from "@/components/Order/orderForm";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
async function handleGettingCar(id: Number){
    const res = await fetch(`/api/cars?id=${id}`, {method: "GET", headers: {
        "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
    }});
    return await res.json();
}

export default function OrderComponent(){
    const [car, setCar] = useState<any>()
    const [width, setWidth] = useState<number>(0)
    const [driver, setDriver] = useState<any>({})
    const order: orderType = useAppSelector(selectOrder)
    useEffect(() => {
        handleGettingCar(order?.carID).then((d) => setCar(d?.[0]))
    },[order])
    useEffect(() => {
        function handleResize(){
            return setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
            <div className="container mx-auto px-4">  
                {width > 470 ? car ? <><OrderStatus order={order} car={car}/> </> : <>Loading..</> : <></>}
                <div className="columns-3xs mt-5">
                    <h1 className="text-left w-full text-[1.5rem] font-bold uppercase">Podsumowanie</h1>
                    
                </div>
                {width < 470 ? car ? <><OrderStatus order={order} car={car}/> </> : <>Loading..</> : <></>}
                <div className="flex flex-row my-5 bg-blue-100 border-blue-300 border-[2px] rounded-lg p-5">
                    <OrderSVG/>
                    <div className="flex flex-col">
                        <p className="font-bold">Co jeśli moje plany się zmienią?</p>
                        <p>dostaniesz pełny zwrot pieniędzy, jeśli odwołasz 24 godziny przed odbiorem samochodu</p>
                    </div>
                </div>
                <div className="lg:flex lg:flex-row">

                
                <FiltredList price={[0,0]} age={[0,0]} type={false} carId={order.carID as number} forSale transmission="all"/>
                <div className="lg:flex lg:flex-col">
                    
                <div className="flex w-full my-2 rounded-lg border-[1px] border-gray-300">
                    <DriverFormHook callback={(data) => setDriver(data)}/>
                    </div>
                    <PayPalScriptProvider options={{ currency: "PLN", "clientId": "ARU-aymS3n0Wf6UALWxBPPoYdzHdc4rAplEAxsRM5LQn3LhxAzqXnVNRAUHs8jdN5wuDvx-2c6TFYK17"}}>
                    <div className="flex w-full mt-2 rounded-lg border-[1px] border-gray-300">
                    <PaymentForm email={driver ? driver.email: "kubapp28@gmail.com"} order={order} car={car}/>
                </div></PayPalScriptProvider>
                </div>
                </div>
        </div>
    )
}