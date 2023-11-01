import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import regiterHeaderImg from './website.png'


const Register = () => {

    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');

    const [email, setREmail] = useState('');
    const [emailErr, setREmailErr] = useState('');

    const [password, setRpassword] = useState('');
    const [passwordErr, setRpasswordErr] = useState('');


    const navigete = useNavigate();

    const handlsubmit =  (e) => {
        e.preventDefault();
        let userdata = {name, email, password };
        if (validation()) {
            localStorage.setItem("newUser", JSON.stringify(userdata))

            alert('You have successfully registered.')

            navigete('/login');
        }
    }


    const fullName = (e) => {
        if (!(e.target.value)) {
            setNameErr('Field is required');
        } else (
            setNameErr(null)
        )
        setName(e.target.value)
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const userEmail = (e) => {
        if (!isValidEmail(e.target.value)) {
            setREmailErr('Please enter valide email');
        } else {
            setREmailErr(null)
        }
        setREmail(e.target.value);
    }

    const userPass = (e) => {
        if (!(e.target.value)) {
            setRpasswordErr('Field is required');
        }
        else (
            setRpasswordErr(null)
        )
        setRpassword(e.target.value);
    }


    const validation = () => {
        let userResult = true;
        if (!name) {
            setNameErr('Field is required');
            userResult = false;
        }
        if (!email) {
            setREmailErr('Field is required');
            userResult = false;
        }
        if (!password) {
            setRpasswordErr('Field is required');
            userResult = false;
        }

        return userResult;
    }

    return (
        <>
            <div className="min-h-[81vh] py-7 flex items-center justify-center px-3 bg-orange-50 ">
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg ring-2 ring-orange-300">
                    <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-semibold text-center text-gray-600 mt-3 mb-4">Create Account</h1>
                        <img src={regiterHeaderImg} alt="Logo" className="w-30 h-20" />
                    </div>
                    
                    <form onSubmit={handlsubmit}>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm text-gray-600">Full Name <span className='text-red-500'>*</span></label>
                            <input type="text" value={name} onChange={fullName} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required="" />
                            <span className='text-red-500 small d-flex h-1 '>{nameErr}</span>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm text-gray-600">Email <span className='text-red-500'>*</span></label>
                            <input type="email" value={email} onChange={userEmail} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required="" />
                            <span className='text-red-500 small d-flex h-1 '>{emailErr}</span>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm text-gray-600">Password <span className='text-red-500'>*</span></label>
                            <input type="password" value={password} onChange={userPass} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required="" />
                            <span className='text-red-500 small d-flex h-1 '>{passwordErr}</span>
                        </div>

                        
                        <button type="submit" className='flex rounded px-5 py-2.5 overflow-hidden z-1 group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90'>
                                    <span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative">Register</span>
                                </button>   
                    </form>
                    <div className="text-center text-sm mt-4">
                        If you have an account? <Link className="text-orange-600 underline" to={'/login'}>Login</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register
