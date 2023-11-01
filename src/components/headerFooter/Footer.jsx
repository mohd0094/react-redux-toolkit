import React from 'react'


const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-gray-200  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
		<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Cart Shop. All Rights Reserved.
    </span>
		<ul className="flex flex-wrap items-center mt-3 sm:mt-0">
			<li>
				<p className="mr-4 cursor-pointer text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</p>
			</li>
			<li>
				<p className="mr-4 cursor-pointer text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy
					Policy</p>
			</li>
			<li>
				<p className="mr-4 cursor-pointer text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</p>
			</li>
			<li>
				<p className="text-sm cursor-pointer text-gray-500 hover:underline dark:text-gray-400">Contact</p>
			</li>
		</ul>
	</footer>
    </>
  )
}

export default Footer
