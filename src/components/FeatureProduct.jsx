import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,setCategory , setActiveButton  } from '../features/cartSlice'

import Stars from './Stars'

const FeatureProduct = () => {
    const items = useSelector(items => items.allCart.items)
    const selectedCategory = useSelector(state => state.allCart.selectedCategory);
    const activeButton = useSelector(state => state.allCart.activeButton);
    
    const dispatch = useDispatch();

    const handleCategoryChange = category => {
        dispatch(setCategory(category));
       
      };

      const handleButtonClick = buttonName => {
        dispatch(setActiveButton(buttonName));
      };

      const filteredItems = selectedCategory    
      ? items.filter(item => item.shoesType === selectedCategory)
      : items;


    return (
        <>
            <div className='product-sec py-7 md:py-20'>
                <div className='container mx-auto px-3 w-full md:w-full sm:w-full lg:w-10/12'>
                    

                    <div className='filter-wrap pb-0 md:pb-7 mt-3 mx-auto max-w-sm'>
                        <div className='flex justify-around w-full'>


                            <div className='filter'>
                                <button onClick={() => {handleCategoryChange(null); handleButtonClick(null)}} className={`rounded px-5 py-1.5 overflow-hidden z-1 inline-block group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 ${activeButton === null ? 'active' : ''}  ${!filteredItems ? 'active' : ''}`}>
                                    <span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative">All</span>
                                </button>
                            </div>

                            <div className='filter'>
                                <button onClick={() => {handleCategoryChange('Man'); handleButtonClick('Man')}}  className={`rounded px-5 py-1.5 overflow-hidden z-1 inline-block group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 ${activeButton === 'Man' ? 'active' : ''}`}>
                                    <span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative">Man</span>
                                </button>
                            </div>

                            <div className='filter'>
                                <button onClick={() => {handleCategoryChange('Woman'); handleButtonClick('Woman')}} className={`rounded px-5 py-1.5 overflow-hidden z-1 inline-block group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 ${activeButton === 'Woman' ? 'active' : ''}`}>
                                    <span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative">Woman</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap -mx-3'>

                        {
                            filteredItems.map((e, i) => {
                                return (

                                    <div className='w-1/2 sm:w-1/3 lg:w-1/4 px-3 ' key={i}>
                                        <div className="relative mt-5 w-full overflow-hidden hover:shadow-xl hover:transform hover:scale-105 duration-300 rounded-lg border border-gray-100 bg-white shadow-md">
 
                                            <div className="relative mx-2 ms:mx-3 mt-2 ms:mt-3 flex md:h-60 overflow-hidden rounded-md sm:rounded-xl">

                                                <img className="object-cover" src={e.image} alt="product" />
                                                {
                                                    e.discountPercentage && <span className="absolute top-0 left-0 m-2 ml-0 shadow-lg border-2  border-l-0 border-white rounded-e-3xl bg-black px-2 p text-center text-sm font-medium text-white">{e.shoesType}</span>
                                                }

                                            </div>
                                            <div className="mt-2 px-2 pb-2">
                                                <div className="flex items-center justify-between ">
                                                    <h5 className="text-md md:text-lg truncate  tracking-tight pr-3 text-slate-900">{
                                                     e.title
                                                    } </h5>
                                                  
                                                </div>

                                                <div className="mt-1 md:mt-2 mb-3 md:mb-5 flex items-center justify-between">
                                                    <p>
                                                        <span className="text-2xl md:text-3xl font-bold text-slate-900">${e.price}</span>
                                                        {
                                                            e.lessPrice && <span className="text-sm text-slate-900 line-through">${e.lessPrice}</span>
                                                        }

                                                    </p>
                                                    <div className="flex items-center">
                                                        
                                                        <Stars stars={e.rating} />
                                                       
                                                       
                                                        <span className="mr-2 ml-3 rounded bg-yellow-300 px-2.5 py-0.5 text-xs font-semibold">
                                                            {e.rating ? e.rating.toFixed(1) : '00'}
                                                            </span>
                                                    </div>
                                                </div>



                                                <button type='button' onClick={() => dispatch(addToCart(e))} className="w-full flex  rounded px-3 py-2 md:px-5 md:py-2.5 overflow-hidden z-1  group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 active:scale-90 text-center text-sm font-medium ">
                                                    <span className="absolute right-0 w-8 h-32 -mt-12 -z-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-80 ease"></span>
                                                    <span className="relative flex items-center justify-center w-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                        Add to cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>


                </div>


            </div>
        </>
    )
}

export default FeatureProduct
