import React, { useRef, useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');
    const navigate = useNavigate()
    const modalRef = useRef(null);

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit =async (data) => {
        const userInfo={
            
             email:data.email,
             password:data.password
         }
         await axios.post('https://get-book-app-backend.onrender.com/user/login',userInfo)
         .then((res)=>{
             console.log(res.data);
             if(res.data){
                
                 toast.success("Login Successfully ")
                 closeModal();
                 setTimeout(()=>{
                    window.location.reload();
                    localStorage.setItem('userInfo', JSON.stringify(res.data.user));
                    navigate("/");
                 },1000)
                 
             }
         }).catch((err)=>{
            if(err.response){
             console.log(err);
             toast.error('Error :'+ err.response.data.message)
            }
         })
       }
    //   console.log(pass , email)
    
    return (
        <>
            <dialog id="my_modal_3" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>

                        <h3 className="font-bold text-2xl text-pink-500 text-center">Login</h3>
                        <div className='space-y-6 my-5'>
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
                                <input type="password" className="grow" value={pass} placeholder='Password' {...register("password", { required: true })} onChange={(e)=>{setPass(e.target.value)}} />
                                
                            </label> <br />
                            {errors.password && <span className='text-red-600 '>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4 items-center'>
                            <button type='submit' className='px-4 py-2 rounded-md text-white bg-pink-400 hover:bg-pink-600 duration-300'>Login</button>
                            <p>Not Registered? <span className='text-blue-600 underline'><Link to='/signup' onClick={closeModal} >SignUp</Link></span></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default Login;
