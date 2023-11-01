import React, { useEffect } from 'react'
// eslint-disable-next-line
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { decreaseItemQuantity, getCartTotal, increaseItemQuantity, removeCartItem } from '../features/cartSlice';
import Stars from './Stars';
import ThemeHeading from './ThemeHeading';




const CartProduct = () => {



  const { cart, totalPrice, totalQuantity } = useSelector(state => state.allCart);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  })




  return (
    <>
      <div className='product-sec py-7 md:py-20'>
        <div className='container mx-auto px-3 w-full md:w-full sm:w-full lg:w-10/12'>
          
          <ThemeHeading heading='Shopping Cart' />

          <div className="mx-auto max-w-5xl pt-5 justify-center px-0 sm:px-6 md:flex md:space-x-6 xl:px-0 ">
            <div className="rounded-lg md:w-2/3 max-h-96 overflow-auto">

              {!(cart.length) && <div className='heading-sec flex flex-col items-center mb-7'><h2 className='text-2xl sm:text-4xl font-bold relative  text-orange-300 flex justify-center mt-10 mb-4'>Empty Cart</h2>
                <div className='my-5'>

                  <svg viewBox="0 0 24 24" fill='none' height={"150px"} width={"150px"} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinejoin="round" ></g><g id="SVGRepo_iconCarrier"> <path d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19" stroke="#ff6600" strokeWidth="1.5" strokeLinejoin="round"></path> <path opacity="0.5" d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#ff6600" strokeWidth="1.5"></path> <path opacity="0.5" d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#ff6600" strokeWidth="1.5"></path> <path d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5" stroke="#ff6600" strokeWidth="1.5"></path> </g></svg>
                </div>
                <Link to={'/'} className="inline-flex rounded px-3 py-2 md:px-5 md:py-2.5 overflow-hidden z-1  group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90 text-center text-sm font-medium "><span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-80 ease"></span><span className="relative whitespace-nowrap flex items-center justify-center w-full"><svg xmlns="http://www.w3.org/2000/svg" className=' w-7 h-5' fill='currentColor' viewBox="0 0 32 32"><path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left"/></svg> Back to Home </span></Link> 
              </div>}
              {cart.map((e, i) => {
                return (
                  <div key={i} className="justify-between hover:bg-orange-50 mb-6 p-3 md:p-6  rounded-lg bg-white  border border-gray-100 shadow-md sm:flex sm:justify-start">

                    <img src={e.image} alt="product" className="md:w-40 w-48 rounded-lg " />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">{e.title}</h2>
                        <p className="mt-1 font-semibold  text-md text-gray-700">${e.price}</p>

                        <div className="flex items-center pt-3">

                          <Stars stars={e.rating} />
                          <span className="ml-0 md:ml-3 rounded bg-yellow-300 px-2.5 py-0.5 text-xs font-semibold ">
                            {e.rating ? e.rating.toFixed(1) : '00'}
                          </span>
                        </div>

                      </div>
                      <div className="mt-4 relative flex justify-between items-center sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <button className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-500 hover:text-blue-50 active:scale-95" onClick={() => dispatch(decreaseItemQuantity(e))}> - </button>
                          <input readOnly className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" onChange={() => null} value={e.quantity} />
                          <button className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-500 hover:text-blue-50 active:scale-95" onClick={() => dispatch(increaseItemQuantity(e))}> + </button>
                        </div>
                        <div className='text-right'>
                          <p className="text-sm"> ${e.quantity * e.price}</p>
                        </div>
                        <div className='text-right'>
                          <button onClick={() => dispatch(removeCartItem(e))} className=" text-red-400 hover:text-red-600">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
              }
            </div>




            <div className="mt-3 h-full rounded-lg border bg-gray-100 p-6 border-gray-200  shadow-md md:mt-0 md:w-1/3">
              <div className='text-2xl mb-5'>Order summary</div>
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Tatal Quantity</p>
                <p className="text-gray-700">{totalQuantity}</p>
              </div>

              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">${totalPrice}</p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Order total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">${totalPrice && + totalPrice + 4.99}</p>
                </div>
              </div>
              
              <Link to='/order' disabled={cart.length === 0} className="mt-6 w-full flex  rounded px-5 py-2.5 overflow-hidden z-1  group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90 text-center text-sm font-medium">
                <span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-80 ease"></span>
                <span className="relative flex items-center justify-center w-full">Check out</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default CartProduct
