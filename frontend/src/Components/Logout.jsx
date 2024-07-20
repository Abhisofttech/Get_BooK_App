import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser , setAuthUser] = useAuth();
    const handleLogout = () =>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            });
            localStorage.removeItem("userInfo");
            toast.success("Logout Succesfully");
            setTimeout(()=>{
                window.location.reload();
             },2000)

        }catch(error){
            toast.error("Error"+ error.message);
        }
    }
  return (
    <>
    <button className='px-3 py-2 text-white bg-red-500 rounded-md hover:bg-red-700 duration-300 '
    onClick={handleLogout}
    >Logout</button>
    </>
  )
}

export default Logout
