import React from 'react'
import FAILUREIMAGE from '../assets/cancel.gif'
import { Link } from 'react-router-dom'


const Cancel = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-12 m-5 rounded'>
        <img
            src={FAILUREIMAGE}
            width={300}
            height={300}
        />
        <p className='text-red-600 font-bold text-2xl'>Oops, Payment Failed</p>
        <Link to={"/cart"} className='p-2 px-3 text-white mt-5 border-2 bg-red-500 border-green-600 rounded font-semibold hover:bg-red-600'>Go To Checkout</Link>
    </div>
  )
}

export default Cancel