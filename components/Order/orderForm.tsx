"use client"
import sendEmail from '@/app/store/featues/firebase'
import {useForm} from 'react-hook-form'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { orderType } from '@/app/store/featues/orderSlice'
import { useRouter } from 'next/navigation'
export default function DriverFormHook({callback}: {callback: (data: any) => void}){
    const {register, handleSubmit} = useForm()
    const onSubmit = (data: any) => callback(data)
    return (
        <>
        <form className='w-full px-5 bg-white rounded-lg' onChange={handleSubmit(onSubmit)}>
            <h2 className='pt-4 text-[1.3rem] font-bold'>Dane kierowcy</h2>
            <p className='text-[0.8rem] mb-5'>Dane z prawa jazdy</p>
            <label>Adres Email</label>
            <input className='form-input' placeholder='car@example.com' type='email' {...register("email", {required: true})}/>
            <p className='text-[0.68rem]'>Na tego emaila wyślemy potwierdzenie</p>
            <label>Imię</label>
            <input className='form-input' type='text' placeholder='Jan'{...register("firstName", {required: true, maxLength: 25})}/>
            <label>Nazwisko</label>
            <input className='form-input' type='text' placeholder='Kowalski' {...register("lastName", {pattern: /^[A-Za-z]+$/i })}/>
            <label>Numer telefonu</label>
            <input className='form-input' type='tel' placeholder='+48 123 456 789'{...register("tel", {required: true})}/>
            {/* <label>Kraj pochodzenia</label>
            <input className='form-input' type='text' {...register("country", {required: true})}/> */} 
        </form>
        </>
    )
}

export  function PaymentForm({email, order, car}: {email: string, order: orderType, car: any}){
    const {register, handleSubmit} = useForm()
    const onSubmit = (data: any) => console.log(data)
    const days: number | undefined =
    Number(order?.returnDate?.split("-")[2]) -
    Number(order?.pickupDate?.split("-")[2]);
    const router = useRouter()
    return (
        <form className='w-full px-5 py-3 bg-white rounded-lg'>
            {/* <h2>W jaki sposób chciałbyś zapłacić?</h2> */}
            <label className=''>Płatność</label>
            {car && order ? <><div className="flex flex-col w-full px-4 py-3">
                <p>Koszt wynajmu: <span className='text-[1.2rem]'>{car.price * days} zł</span></p>
                <p>VAT 23%: <span className='text-[1.2rem]'>{(car.price * days) * 0.23} zł</span></p>
                <p>Opłata serwisowa: <span className='text-[1.2rem]'>5 zł</span></p>
                <p className='text-[1.4rem] font-bold'>Razem: {((car.price * days) * 1.23) + 5} zł</p>
            </div> </> : <>Loading...</>}
            <div className="paypal justify-center flex w-full">
                {order && car ? <PayPalButtons style={{height: 48,layout: "vertical", disableMaxWidth: true}} className='w-full' createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            description: `Wynajem ${car?.name}`,
                            amount: {
                                value: `${((car.price * days) * 1.23) + 5}`
                            },

                        }]
                    })
                }} onApprove={async (data, actions) => {
                    const order = await actions?.order?.capture()
                    console.log(order)
                    await router.push("order/success")
                }} onError={async (err) => {
                    // const order = await actions?.order?.capture()
                    // console.log(order)
                    await router.push("order/failed")
                }}
                onCancel={async (data, actions) => {
                    // const order = await actions?.order?.capture()
                    // console.log(order)
                    await router.push("order/failed")
                }}/> : <>Loading..</>}
            </div>
        </form>
    )
}