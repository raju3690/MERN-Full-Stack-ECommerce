import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';

const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()


    useEffect(()=>{
        if(user?.role !== ROLE.ADMIN){
            navigate("/")
        }
    },[user])

  return (
    <div className='min-h-[calc(100vh-120px)] md:flex hidden'>

        <aside className='bg-white min-h-full  w-full  max-w-60 customShadow'>
                <div className='h-22 flex justify-center items-center flex-col'>
                    <div className='text-5xl cursor-pointer relative flex justify-center'>
                        {
                        user?.profilePic ? (
                            <img src={user?.profilePic} className='w-20 h-20 rounded-full my-5' alt={user?.name} />
                        ) : (
                            <FaRegCircleUser/>
                        )
                        }
                    </div>
                    <p className='capitalize text-lg font-semibold'>Name: {user?.name}</p>
                    <p className='text-base font-semibold'>Role : {user?.role}</p>
                </div>

                 {/***navigation */}
                <hr className="my-2 border-t-2 border-black border-opacity-50"></hr> 
                <div>   
                    <nav className='grid p-3'>
                        <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100'>Manage Users</Link>
                        <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100'>Manage Product</Link>
                    </nav>
                </div>  
        </aside>

        <main className='w-full h-full p-2'>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminPanel