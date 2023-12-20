"use client";

import React from 'react'


const Searchbar = () => {

	const handleSubmit = () => {}
  return (
	<form className='flex flex-wrap gap-4 mt-12'
	onSubmit={handleSubmit}
	>
		<input 
		type="text"
		placeholder='Enter product link'
		className='searchbar-input border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
		/>
		<button type="submit" className='searchbar-btn '>
			Search
		</button>

	</form>
  )
}

export default Searchbar
