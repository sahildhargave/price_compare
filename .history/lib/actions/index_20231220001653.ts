"use server";

import { revalidatePath } from "next/cache";
import Product from "../models/product.model";
import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";
import { getAveragePrice, getHighestPrice, getLowestPrice } from "../utils";


export async function scrapeAndStoreProduct(productUrl: string){
if(!productUrl) return ;



try{
	connectToDB();
  const scrapedProduct = await 
  scrapeAmazonProduct(productUrl);
  if(!scrapedProduct) return ;

  let product = scrapedProduct;
  const existProduct = await Product.findOne({
	url: scrapedProduct.url
  });

  if(existProduct){
	const updatedPriceHistory: any= [
		...existProduct.priceHistory,
		{price: scrapedProduct.currentPrice}
	]

	product ={
		...scrapedProduct,
		priceHistory: updatedPriceHistory,
		lowestPrice: getLowestPrice(updatedPriceHistory),
		highestPrice:getHighestPrice(updatedPriceHistory),
		averagePrice:getAveragePrice(updatedPriceHistory)
	}
  }

  const newProduct = await Product.findOneAndUpdate({
	url: scrapedProduct.url},
	product,
	{ upsert: true , new: true}
  );

  revalidatePath(`/products/${newProduct._id}`);
}catch(e: any){
	throw new Error(`Failed to crete/update product: ${e.message}`)
}
}

export async function getProductById(productId: string){
	try{
    connectToDB();
	const product = await Product.findOne({ _id: productId });

	if(!product) return null;

	return product;
	}catch(e){
    console.log(e);
	}
}