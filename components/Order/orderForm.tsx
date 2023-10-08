"use client"
import sendEmail from '@/app/store/featues/firebase'
import {useForm} from 'react-hook-form'
export default function DriverFormHook({callback}: {callback: (data: any) => void}){
    const {register, handleSubmit} = useForm()
    const onSubmit = (data: any) => callback(data)
    return (
        <>
        <form className='w-full px-5 bg-white rounded-lg' onChange={handleSubmit(onSubmit)}>
            <h2 className='pt-4 text-[1.3rem] font-bold'>Dane kierowcy</h2>
            <p className='text-[0.8rem] mb-5'>Dane z prawa jazdy</p>
            <label>Adres Email</label>
            <input className='form-input' type='email' {...register("email", {required: true})}/>
            <p className='text-[0.68rem]'>Na tego emaila wyślemy potwierdzenie</p>
            <label>Imię</label>
            <input className='form-input' type='text' {...register("firstName", {required: true, maxLength: 25})}/>
            <label>Nazwisko</label>
            <input className='form-input' type='text' {...register("lastName", {pattern: /^[A-Za-z]+$/i })}/>
            <label>Numer telefonu</label>
            <input className='form-input' type='tel' {...register("tel", {required: true})}/>
            {/* <label>Kraj pochodzenia</label>
            <input className='form-input' type='text' {...register("country", {required: true})}/> */} 
        </form>
        </>
    )
}

export  function PaymentForm({email}: {email: string}){
    const {register, handleSubmit} = useForm()
    const onSubmit = (data: any) => console.log(data)
    return (
        <form className='w-full px-5 bg-white rounded-lg'>
            <h2>W jaki sposób chciałbyś zapłacić?</h2>
            <label>Wybierz sposób płatności</label>
            <input type='radio'/> 
            <div className='' onClick={() => sendEmail(email)}>kupuje</div>
        </form>
    )
}