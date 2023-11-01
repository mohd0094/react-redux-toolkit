import React from 'react'
import { Link } from 'react-router-dom'

const LogoutBtn = () => {
    return (
        <>
            {/* <span className='text-xl mr-3'>{loginChack}</span> */}
            <Link to='/login' className="w-full flex  rounded px-5 py-2.5 overflow-hidden z-1  group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90 text-center text-sm font-medium">
                <span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative flex items-center justify-center w-full">Logout
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" class="cursor-pointer ml-2 w-6 h-6 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                </span>
            </Link>
        </>
    )
}

export default LogoutBtn
