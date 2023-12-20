"use server";

import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";


export async function scrapeAndStoreProduct(productUrl: string){
if(!productUrl) return ;



try{
	connectToDB();
  const scrapedProduct = await 
  scrapeAmazonProduct(productUrl);
  if(!scrapedProduct) return ;


}catch(e: any){
	throw new Error(`Failed to crete/update product: ${e.message}`)
}
}