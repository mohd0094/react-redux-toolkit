import React from 'react'

export default function OrderSuccessfully() {
    
    return (
        <>
            <div className='product-sec py-7 md:py-20'>
                <div className='container mx-auto px-3 w-full md:w-full sm:w-full lg:w-10/12'>
                    <div className='flex flex-col items-center'>
                        <h1 className="text-3xl text-center text-primary font-semibold poppins flex space-x-6 items-center text-orange-500 "><svg
                            stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                            className="text-green-500 mr-2 text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z">
                            </path>
                        </svg> Order Successful!!!</h1>

                        <img className="w-96 object-contain"
                            src="./img/successfulpurchae-pana.svg" alt="orderSuccessful" />

                        <button onClick={()=>{window.location.replace('/')}} className=" flex  rounded px-5 py-2.5 overflow-hidden z-1  group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90 text-center text-sm font-medium"><span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span><span className="relative flex items-center justify-center w-full">Back to home</span></button>

                    </div>

                </div>
            </div>
        </>
    )
}
