import React, { useState } from 'react';
import Login from './Login';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';


const SignUp = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit =async (data) => {
       const userInfo={
            name:data.name,
            email:data.email,
            password:data.password
        }
        await axios.post('http://localhost:8000/user/signup',userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success(" SignUp Successfuly")
                setTimeout(()=>{
                    localStorage.setItem('userInfo', JSON.stringify(res.data.user));
                    navigate("/");
                       window.location.reload();
                 },1000)
            }
            localStorage.setItem('userInfo', JSON.stringify(res.data.user));
        }).catch((err)=>{
           if(err.response){
            console.log(err);
            toast.error('Error :'+ err.response.data.message)
           }
        })
      }
      console.log(pass , email)

    return (
        <>
        <div className='flex justify-center items-center '>
            <div className='max-w-screen-2xl bg-base-200 rounded-badge container max-auto md:px-20 px-4 mt-28 w-full md:w-1/2 p-10'>
                <form onSubmit={handleSubmit(onSubmit)} method="dialog ">


                    <h3 className="font-bold text-2xl text-pink-500 text-center">SignUp</h3>
                    <div className='space-y-6 my-5'>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Name" value={name} {...register("name", { required: true })} onChange={ (e)=>{setName(e.target.value)}} />
                        </label> <br />
                        {errors.name && <span className='text-red-600 '>This field is required</span>}
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" value={email} {...register("email", { required: true })} onChange={ (e)=>{setEmail(e.target.value)}} />
                        </label> <br />
                        {errors.email && <span className='text-red-600 '>This field is required</span>}
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule=""
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="password" className="grow" value={pass} placeholder='Password' {...register("password", { required: true })} onChange={ (e)=>{setPass(e.target.value)}} />
                        </label> <br />
                        {errors.password && <span className='text-red-600 '>This field is required</span>}
                    </div>
                    <div className='flex justify-around mt-4 items-center'>
                        <button  type='submit' className='px-4 py-2 rounded-md text-white bg-pink-500 hover:bg-pink-700 duration-300'>SignUp</button>
                        <p>Have account? <Link to='/' className="text-blue-500 underline" onClick={()=>{document.getElementById("my_modal_3").showModal()}}> Login</Link>
                        <Login/></p>
                    </div>
                    <Login/>
                </form>
            </div>
            </div>
        </>
    )
}

export default SignUp
