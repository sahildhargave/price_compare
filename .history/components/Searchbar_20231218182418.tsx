"use client";

import { scrapeAndStoreProduct } from '@/lib/actions';
import React,{FormEvent, useState } from 'react'

const isValidAmazonProductURL = (url: string) => {
try{
const parsedURL = new URL(url);
const hostname = parsedURL.hostname;

if(hostname.includes('amazon.com') ||
 hostname.includes('amazon.') || 
 hostname.endsWith('amazon')
 ){
	return true;
 }
}catch(e){
return false;
}

return false;
}

const Searchbar = () => {
	const [searchPrompt, setSearchPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);


	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const isValidLink = isValidAmazonProductURL(searchPrompt);
        if(!isValidLink) return alert('Please provide a valid Amazon link')
        
		try{
			setIsLoading(true);

			const product = await scrapeAndStoreProduct(searchPrompt);

			
		}catch(e){
			console.log(e);
		}finally{
			setIsLoading(false);
		}

	}
  return (
	<form className='flex flex-wrap gap-4 mt-12'
	onSubmit={handleSubmit}
	>
		<input 
		type="text"
		value={searchPrompt}
		onChange={(e) => setSearchPrompt(e.target.value)}
		placeholder='Enter product link'
		className='searchbar-input border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
		dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
		/>
		<button type="submit" 
		className='searchbar-btn '
		disabled={searchPrompt === ''}
		>
		{isLoading ? 'Searching...' : 'Search'}
		</button>

	</form>
  )
}

export default Searchbar
