import Link from 'next/link'
import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'

const PaymentFailed = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-fuchsia-950/50 text-center'>
     <div className='flex flex-col gap-10'>
        <div className='flex items-center gap-4'>
        <FaTimesCircle className='text-6xl' /> 
        <h1 className='text-3xl font-bold text-red-500'>Payment Cancel !</h1>
        </div>
        <div className='flex max-w-sm flex-col gap-2 text-center'>
          <p className=' text-sm font-normal text-slate-300 tracking-widest flex-wrap'>Your Payment has been Canceled. There might be some issue related to payment detail. </p>
          <p className=' text-sm font-normal text-slate-300 tracking-widest'>Try again, <Link href={"/products"} className='text-pink-400 cursor-pointer hover:text-pink-500  active:text-pink-600 transition-all'>visit shop</Link> to Continue your shopping.</p>
        </div>
     </div>
    </div>
  )
}

export default PaymentFailed