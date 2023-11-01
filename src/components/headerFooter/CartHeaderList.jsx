import React, { useEffect } from 'react'
import { getCartTotal, removeCartItem } from '../../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const CartHeaderList = () => {

    const { cart } = useSelector(state => state.allCart);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartTotal())
    })

    return (
        <>
        
            {(cart.length > 0) &&
                <div className="cart-list shadow-xl rounded-lg overflow-hidden w-60 md:w-80 absolute bg-white top-[40px] right-0">
                    <div className="flex justify-between bg-orange-400 text-white  border-b p-2">
                        <h1 className="font-semibold text-1xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-1xl">{cart.length} Items</h2>
                    </div>
                    <div className='max-h-72 overflow-y-auto'>
                        {
                            cart.map((e,i) => {
                                return (

                                    <div key={i} className="p-2 flex bg-white hover:bg-gray-100  border-b border-gray-100" >
                                        
                                        <div className="w-24 mr-2 border rounded-sm border-white "><img src={e.image} alt="img product" className='object-cover w-full h-full' /></div>
                                        <div className="flex-auto text-sm w-32">
                                            <div className="font-bold">{e.title}</div>
                                            <div className="truncate">{e.shoesType}</div>
                                            <div className="text-gray-600">Qt: {e.quantity} 
                                            <span className="mr-2 ml-3 rounded bg-yellow-300 px-2.5 py-0.5 text-xs font-semibold">
                                                {e.rating ? e.rating.toFixed(1) : '00'}
                                            </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-16 font-medium items-end">
                                            <button onClick={() => dispatch(removeCartItem(e))} className="w-6 h-6 mb-6 p-1 bg-red-500 hover:bg-red-600 rounded-full cursor-pointer text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={"100%"} height={"100%"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </button>
                                            ${e.quantity*e.price}

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="p-4 justify-center flex border-t-2 bg-orange-200 border-orange-400">
                       

                        <Link to={'/cart-product'} type='button' className="w-full flex rounded px-5 py-2.5 overflow-hidden z-1  group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90 text-center text-sm font-medium">
                                <span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-80 ease"></span>
                                <span className="relative flex items-center justify-center w-full">Check out</span>
                            </Link>
                    </div>


                </div>
            }
        </>
    )
}

export default CartHeaderList
