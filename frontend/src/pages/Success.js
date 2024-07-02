import React from 'react'
import SUCCESSIMAGE from '../assets/new.gif'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-10 m-5 rounded'>
        <img
            src={SUCCESSIMAGE}
            width={200}
            height={200}
        />
        <p className='text-green-600 font-bold text-2xl'>Payment Successfull 🎉</p>
        <Link to={"/order"} className='p-2 px-3 text-white mt-5 border-2 bg-green-500 border-green-600 rounded font-semibold hover:bg-green-600'>See Your Orders</Link>
    </div>
  )
}

export default Success