import React from 'react'

const ThemeHeading = (props) => {
    return (
        <>
            <div className='heading-sec text-center mb-7 md:mb-10'>
            <h2 className='flex justify-center items-center text-2xl sm:text-4xl font-bold relative text-gray-800  dark:text-white'>
                <span className="w-10 sm:w-20 h-[2px] mr-5 bg-gradient-to-l to-orange-600 from-yellow-200 "></span>
                    {props.heading}
                <span className="w-10 sm:w-20 h-[2px] ml-5 bg-gradient-to-r to-orange-600 from-yellow-200 "></span>
            </h2>
            </div>
        </>
    )
}

export default ThemeHeading
