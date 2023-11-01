import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getCartTotal } from '../../features/cartSlice';
import CartHeaderList from './CartHeaderList';

const Header = () => {
    const { totalQuantity } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    });

    const location = useLocation();


    return (
        <>
            {
                (location.pathname === "/order" || location.pathname === "/order-successfull") ?

                    <header className='header-sec backdrop-blur-sm bg-white/80 sticky border-gray-200 z-20 top-0 left-0 w-full shadow-md transition duration-500'>
                        <nav className="px-4 lg:px-6 py-2.5">
                            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                                <button  onClick={()=>{window.location.replace('/')}} className="flex items-center">
                                    <span className="self-center text-xl font-semibold whitespace-nowrap ">Shoes <span className='text-orange-500'>Shop</span></span>
                                </button>
                            </div>
                        </nav>
                    </header>



                    :
                    <header className='header-sec backdrop-blur-sm bg-white/80 sticky border-gray-200 z-20 top-0 left-0 w-full shadow-md transition duration-500'>
                        <nav className="px-4 lg:px-6 py-2.5">
                            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                                <Link to={'/'} className="flex items-center">
                                    <span className="self-center text-xl font-semibold whitespace-nowrap ">Shoes <span className='text-orange-500'>Shop</span></span>
                                </Link>
                                <div className="flex items-center lg:order-2">


                                    <div className="cart-list-wrap text-gray-800 relative hover:bg-white/40 px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">
                                        <div className="relative flex cursor-pointer"><span className="bg-orange-500 w-6 h-6 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2">{totalQuantity}</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="cursor-pointer w-6 h-6 text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path></svg></div>
                                        <CartHeaderList />
                                    </div>
                                </div>
                            </div>


                        </nav>

                    </header>
            }

            {/* {

                          
                                
                                !loginChack ?  <Link to='/login' className="w-full flex  rounded px-5 py-2.5 overflow-hidden z-1  group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90 text-center text-sm font-medium">
                                    <span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative flex items-center justify-center w-full">Login</span>
                                </Link> :
                                <>
                                   
                                    <span className='text-xl mr-3'>{loginChack}</span>
                                    <Link to='/login' onClick={()=>window.location.reload()} className="w-full flex  rounded px-5 py-2.5 overflow-hidden z-1  group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90 text-center text-sm font-medium">
                                        <span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                        <span className="relative flex items-center justify-center w-full">Logout 
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" class="cursor-pointer ml-2 w-6 h-6 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        </span> 
                                    </Link>
                                </>

                                    
                            } */}



            {/* <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button> */}

            {/* <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:text-gray-400  lg:p-0 " aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <a href="/#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-gray-400  lg:border-0 lg:p-0">About</a>
                                </li>

                            </ul>
                        </div> */}

        </>
    )
}

export default Header
