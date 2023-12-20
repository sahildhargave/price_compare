"use server";

import { scrapeAmazonProduct } from "../scraper";


export async function scrapeAndStoreProduct(productUrl: String){
if(!productUrl) return ;

try{
  const scrapedProduct = await 
  scrapeAmazonProduct(productUrl);
}catch(e: any){
	throw new Error(`Failed to crete/update product: ${e.message}`)
}
}