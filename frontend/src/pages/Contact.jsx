import React, { useState } from 'react';
import { useForm } from "react-hook-form"

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className='flex justify-center items-center '>
                <div className='max-w-screen-2xl bg-base-200 rounded-badge container max-auto md:px-20 px-4 mt-28 w-full md:w-1/2 p-10'>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
                        <h3 className="font-bold text-2xl text-pink-600 text-center">Contact Us</h3>
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
                                <input type="text" className="grow" placeholder="Name" value={name} {...register("name", { required: true })} onChange={(e) => { setName(e.target.value) }} />
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
                                <input type="text" className="grow" placeholder="Email" value={email} {...register("email", { required: true })} onChange={(e) => { setEmail(e.target.value) }} />
                            </label> <br />
                            {errors.email && <span className='text-red-600 '>This field is required</span>}
                            <label className=" flex items-center gap-2">
                                <textarea className="textarea textarea-bordered w-full " value={message} placeholder="Message" {...register("message", { required: true })} onChange={(e) => { setMessage(e.target.value) }} ></textarea>
                            </label> <br />
                            {errors.message && <span className='text-red-600 '>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4 items-center'>
                            <button type='submit' className='px-4 py-2 rounded-md text-white bg-pink-500 hover:bg-pink-700 duration-300'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
