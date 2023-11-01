import React, { useEffect, useState } from 'react'
import ThemeHeading from './ThemeHeading'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../features/cartSlice';
import { Link, useNavigate } from 'react-router-dom';


export default function Order() {

    const { cart, totalPrice, totalQuantity } = useSelector(state => state.allCart);
    const dispatch = useDispatch()

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');

    const [cartItem, setCartItem] = useState('');

    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');

    const [cardDetails, setCardDetails] = useState('');
    const [cardErr, setCardErr] = useState('');

    const [cardExpiry, setCardExpiry] = useState('');
    const [cardExErr, setCardExErr] = useState('');

    const [cardCvc, setCardCvc] = useState('');
    const [cardCvcErr, setCardCvcErr] = useState('');   

    const [billingAddress, setBillingAddress] = useState('');
    const [billAddErr, setBillAddErr] = useState('');   

    const [billingState, setBillingState] = useState('');
    const [billStatErr, setBillStatErr] = useState('');  

    const [zip, setZip] = useState('');
    const [zipErr, setZipErr] = useState('');  

    const navigate = useNavigate();
  
    useEffect(() => {
        dispatch(getCartTotal())
        
    })


    const handleSubmit =  (e) => {
        e.preventDefault();
        let userdata = {name, cardDetails, cardExpiry, cardCvc, billingAddress, billingState, zip };
        if (validation()) {
            localStorage.setItem("userPaymant", JSON.stringify(userdata))

            alert(`Congratualations!!! You have order ${totalQuantity} times successfully.`)

            navigate('/order-successfull');
            
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

    const handleCardDtails = (e) => {
        if (!(e.target.value)) {
            setCardErr('Field is required');
        } else (
            setCardErr(null)
        )
        setCardDetails(e.target.value)
    }

    const handleCardExpiry = (e) => {
        if (!(e.target.value)) {
            setCardExErr('Field is required');
        } else (
            setCardExErr(null)
        )
        setCardExpiry(e.target.value)
    }


    const handleCvc = (e) => {
        if (!(e.target.value)) {
            setCardCvcErr('Field is required');
        } else (
            setCardCvcErr(null)
        )
        setCardCvc(e.target.value)
    }


    const handleBilAddress = (e) => {
        if (!(e.target.value)) {
            setBillAddErr('Field is required');
        } else (
            setBillAddErr(null)
        )
        setBillingAddress(e.target.value)
    }


    const handleBilState = (e) => {
        if (!(e.target.value)) {
            setBillStatErr('Field is required');
        } else (
            setBillStatErr(null)
        )
        setBillingState(e.target.value)
    }

    const handleZip = (e) => {
        if (!(e.target.value)) {
            setZipErr('Field is required');
        } else (
            setZipErr(null)
        )
        setZip(e.target.value)
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const userEmail = (e) => {
        if (!isValidEmail(e.target.value)) {
            setEmailErr('Please enter valide email');
        } else {
            setEmailErr(null)
        }
        setEmail(e.target.value);
    }
   


    const validation = () => {
        let userResult = true;

        if (!email) {
            setEmailErr('Field is required');
            userResult = false;
        }

        if (!cart.length) {
            setCartItem('Empty Cart you cannot Place Order');
            userResult = false;
        }

       
        if (!name) {
            setNameErr('Field is required');
            userResult = false;
        }

        if (!cardDetails) {
            setCardErr('Field is required');
            userResult = false;
        }

        if (!cardExpiry) {
            setCardErr('Field is required');
            userResult = false;
        }

        if (!cardExpiry) {
            setCardExErr('Field is required');
            userResult = false;
        }

        if (!cardCvc) {
            setCardCvcErr('Field is required');
            userResult = false;
        }

        if (!billingAddress) {
            setBillAddErr('Field is required');
            userResult = false;
        }

        if (!billingState) {
            setBillStatErr('Field is required');
            userResult = false;
        }

        if (!zip) {
            setZipErr('Field is required');
            userResult = false;
        }

        return userResult;
    }

    return (
        <>
            <div className='product-sec py-7 md:py-20'>
                <div className='container mx-auto px-3 w-full md:w-full sm:w-full lg:w-10/12'>
                
                    <ThemeHeading heading='Place Order' />


                    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                        
                        <div className="px-0 md:px-5 md:pt-8">
                            <div className='pb-5'>
                        {
                           cart.length ?  
                           <Link to={'/cart-product'} className="inline-flex rounded px-3 py-2 md:px-5 md:py-2.5 overflow-hidden z-1  group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90 text-center text-sm font-medium "><span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-80 ease"></span><span className="relative whitespace-nowrap flex items-center justify-center w-full"><svg xmlns="http://www.w3.org/2000/svg" className=' w-7 h-5' fill='currentColor' viewBox="0 0 32 32"><path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left"/></svg> Check out </span></Link> 
                           :
                            

                            <Link to={'/'} className=" inline-flex rounded px-3 py-2 md:px-5 md:py-2.5 overflow-hidden z-1  group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90 text-center text-sm font-medium "><span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-80 ease"></span><span className="relative whitespace-nowrap flex items-center justify-center w-full"><svg xmlns="http://www.w3.org/2000/svg" className=' w-7 h-5' fill='currentColor' viewBox="0 0 32 32"><path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left"/></svg> Back to Home </span></Link> 
                        }
                            
                            </div>

                            


                        
                            <p className="text-xl font-medium">Order Summary</p>
                            <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                            <div className="mt-8 space-y-3 rounded-lg border bg-white shadow-xl max-h-[500px] overflow-auto">
                            {!(cart.length) && <div className='heading-sec flex flex-col items-center mb-7'><h2 className='text-2xl sm:text-4xl font-bold relative  text-orange-300 flex justify-center mt-10 mb-2'>Empty Cart</h2>
                <div className='my-5 flex flex-col items-center'>

                <h3 className='text-red-500 text-2xl font-semibold d-flex pb-2'>{cartItem}</h3>

                  <svg viewBox="0 0 24 24" fill='none' height={"150px"} width={"150px"} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinejoin="round" ></g><g id="SVGRepo_iconCarrier"> <path d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19" stroke="#ff6600" strokeWidth="1.5" strokeLinejoin="round"></path> <path opacity="0.5" d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#ff6600" strokeWidth="1.5"></path> <path opacity="0.5" d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#ff6600" strokeWidth="1.5"></path> <path d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5" stroke="#ff6600" strokeWidth="1.5"></path> </g></svg>

                </div>
                

              </div>}  
                                { 
                                    cart.map((e, i) => {

                                        return (
                                            <div key={i} className="flex flex-col bg-white  border-b sm:flex-row">
                                                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={e.image} alt="" />
                                                <div className="flex w-full flex-col px-4 pb-4">
                                                    <span className="font-semibold">{e.title}</span>
                                                    <p className="text-lg font-bold">${e.quantity * e.price}</p>
                                                    <span className="float-right text-gray-400">{e.shoesType}</span>
                                                    <div className="flex items-center pt-1">
                                                        <div className="text-gray-600">Qt: {e.quantity}
                                                            <span className="mr-2 ml-3 rounded bg-yellow-300 px-2.5 py-0.5 text-xs font-semibold">
                                                                {e.rating ? e.rating.toFixed(1) : '00'}
                                                            </span>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>

                        </div>
                        <div className="mt-10 bg-gray-50 px-4 py-5 shadow-xl rounded-lg border-2 lg:mt-0">
                         

                            <p className="text-xl font-medium">Payment Details</p>
                            <p className="text-gray-400">Complete your order by providing your payment details.</p>
                        
                                <form onSubmit={handleSubmit}> 

                                <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
                                    <div className="relative">
                                        <input type="email"  value={email} onChange={userEmail} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:ring-2 focus:ring-orange-500" placeholder="Your email here" />
                                        
                                        <span className='text-red-500 text-xs d-flex h-1 '>{emailErr}</span>
                                    </div>

                                    <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
                                    <div className="relative">
                                        <input type="text"  value={name} onChange={fullName} className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:ring-2 focus:ring-orange-500" placeholder="Your full name here" />
                                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                            </svg>
                                        </div>
                                        
                                    </div>
                                    <span className='text-red-500 text-xs d-flex h-1 '>{nameErr}</span>

                                    <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">Card Details</label>
                                    <div className="flex flex-wrap sm:flex-nowrap">
                                        <div className='w-full mb-2  md:w-3/5 md:flex-auto md:mb-0'>
                                            <div className="relative">
                                                <input type="text"  value={cardDetails} onChange={handleCardDtails} className="w-full  rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:ring-2 focus:ring-orange-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
                                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                    <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                                    </svg>
                                                </div>
                                            </div>  
                                            <span className='text-red-500 text-xs d-flex h-1 '>{cardErr}</span>
                                        </div>
                                        
                                        
                                        <div className='w-1/2 md:w-1/5 flex-auto pr-1 md:px-1'>
                                            <input type="text" value={cardExpiry} onChange={handleCardExpiry} className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:ring-2 focus:ring-orange-500" placeholder="MM/YY" />
                                            <span className='text-red-500 text-xs d-flex h-1 '>{cardExErr}</span>
                                        </div>
                                        
                                        <div className='w-1/2 md:w-1/5 flex-auto'>
                                            <input type="text" value={cardCvc} onChange={handleCvc} className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:ring-2 focus:ring-orange-500" placeholder="CVC" />
                                            <span className='text-red-500 text-xs d-flex h-1 '>{cardCvcErr}</span>
                                        </div>
                                        
                                    </div>

                                    <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>

                                    <div className="flex flex-wrap sm:flex-nowrap">
                                        <div className="w-full mb-2  md:w-3/5 md:flex-auto md:mb-0'">
                                            <div className='relative'>
                                                <input type="text" value={billingAddress} onChange={handleBilAddress} className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:ring-2 focus:ring-orange-500" placeholder="Street Address" />

                                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                    <img className="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
                                                </div>
                                                
                                            </div>
                                            <span className='text-red-500  text-xs d-flex h-1 '>{billAddErr}</span>
                                            
                                        </div>

                                        <div className='w-1/2 md:w-1/5 flex-auto pr-1 md:px-1'>
                                            <select type="text" value={billingState} onChange={handleBilState} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:ring-2 focus:ring-orange-500">
                                                <option value="State" >State</option>
                                                <option value="State1">State1</option>
                                            </select>
                                            <span className='text-red-500 text-xs d-flex h-1 '>{billStatErr}</span>
                                        </div>
                                        
                                        <div className='w-1/2 md:w-1/5 flex-auto '>
                                            <input type="text" value={zip} onChange={handleZip} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:ring-2 focus:ring-orange-500" placeholder="ZIP" />
                                            <span className='text-red-500 text-xs d-flex h-1 '>{zipErr}</span>
                                        </div>
                                        
                                    </div>

                                    <div className="mt-6 pt-3 border-t border-b py-2">
                                        <div className="flex  mb-3 items-center justify-between">
                                            <p className="text-sm font-medium text-gray-900">Tatal Quantity</p>
                                            <p className="font-semibold text-gray-900">{totalQuantity}</p>
                                        </div>
                                        <div className="flex mb-3 items-center justify-between">
                                            <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                            <p className="font-semibold text-gray-900">${totalPrice.toFixed(2)}</p>
                                        </div>
                                        <div className="flex mb-3 items-center justify-between">
                                            <p className="text-sm font-medium text-gray-900">Shipping</p>
                                            <p className="font-semibold text-gray-900">$4.99</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex items-center justify-between">
                                        <p className="text-2xl font-medium text-gray-900">Total</p>
                                        <p className="text-2xl font-semibold text-gray-900">${totalPrice ? (totalPrice + 4.99).toFixed(2) : '00.00'}</p>
                                    </div>


                                    <button type='submit'  className="mt-6 w-full flex  rounded px-5 py-2.5 overflow-hidden z-1  group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90 text-center text-sm font-medium">
                                        <span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 translate translate-x-20 bg-white opacity-10 rotate-12 group-hover:-translate-x-[32rem] ease"></span>
                                        <span className="relative flex items-center justify-center w-full">Place Order</span>
                                    </button>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
