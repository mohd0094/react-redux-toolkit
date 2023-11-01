import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import regiterHeaderImg from './website.png'

const Login = () => {
    const [email, setREmail] = useState('');
    const [emailErr, setREmailErr] = useState('');

    const [password, passwordupdate] = useState('');
    const [passwordErr, passwordupdateErr] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    });

   

    const prossedLogin = (e) => {
        e.preventDefault();
        if (validate()) {

            let registerData = JSON.parse(localStorage.getItem('newUser'));

            if (!registerData) {
                alert('If you are a new user. Please register after login');
            }else {
                if (registerData.email === email && registerData.password === password) {
                    alert('you have Successfully Logged In!');   
                sessionStorage.setItem('LoggedInUser', registerData.name);
                    
                navigate('/');
             
            } else {
              
                alert('Email and Password do not match.');
            }
        }

        }
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

    const userPassFun = (e) => {
        if (!(e.target.value)) {
            passwordupdateErr('Field is required');
        } else (
            passwordupdateErr(null)
        )
        passwordupdate(e.target.value);
    }

    const validate = () => {
        let result = true;
        if (!email) {
            setREmailErr('Field is required');
            result = false;
        }

        if (!password) {
            result = false;
            passwordupdateErr('Field is required');
        }

        return result;
    }

    return (
        <>
            <div className="min-h-[81vh] py-7 flex items-center justify-center px-3 bg-orange-50 ">
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg ring-2 ring-orange-300">
                    <div className="flex items-center justify-between mb-2">
                        <h1 className="text-3xl font-semibold text-center text-gray-600 mt-3 mb-4">Sign in</h1>
                        <img src={regiterHeaderImg} alt="Logo" className="w-30 h-20" />
                    </div>
                    <form onSubmit={prossedLogin}>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm text-gray-600">Email <span className='text-red-500'>*</span></label>
                            <input type="email" value={email} onChange={userEmail} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required="" />
                            <span className='text-red-500 small d-flex h-1 '>{emailErr}</span>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm text-gray-600">Password <span className='text-red-500'>*</span></label>
                            <input type="password" value={password} onChange={userPassFun} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required="" />
                            <span className='text-red-500 small d-flex h-1 '>{passwordErr}</span>
                        </div>

                        <button type="submit" className='flex rounded px-5 py-2.5 overflow-hidden z-1 group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90'>
                                    <span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative">Login</span>
                                </button>
                    </form>
                    <div className="text-center text-sm mt-4">
                       Not a member? <Link to={'/register'} className="text-orange-600 underline">Register</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
