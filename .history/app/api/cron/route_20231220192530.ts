import Product from "@/lib/models/product.model";
import { connectToDB } from "@/lib/mongoose";
import { scrapeAmazonProduct } from "@/lib/scraper";
import { getAveragePrice, getHighestPrice, getLowestPrice , getEmailNotifType} from "@/lib/utils";




export async function GET(request: Request){
	try{
		connectToDB();

		const products = await Product.find({});
		if(!products) throw Error("No product fetch");

		const updatedProducts = await Promise.all(
			products.map(async (currentProduct) => {
				const scrapedProduct = await scrapeAmazonProduct(currentProduct.url);

				if(!scrapedProduct) return;

				 const updatedPriceHistory = [
          ...currentProduct.priceHistory,
          {
            price: scrapedProduct.currentPrice,
          },
        ];

        const product = {
          ...scrapedProduct,
          priceHistory: updatedPriceHistory,
          lowestPrice: getLowestPrice(updatedPriceHistory),
          highestPrice: getHighestPrice(updatedPriceHistory),
          averagePrice: getAveragePrice(updatedPriceHistory),
        };

        // Update Products in DB
        const updatedProduct = await Product.findOneAndUpdate(
          {
            url: product.url,
          },
          product
        );

		const emailNotifType = getEmailNotifType(
			scrapedProduct,
			currentProduct
		)

			})
		)
	}
}