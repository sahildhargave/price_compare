//
//import React from 'react'
//
//import { getProductById } from '@/lib/actions'
//
//type Props = {
//	params: { id: string }
//}
//
//const ProductDetails = async ({ params: {id }}: Props) => {
//	const product = await getProductById(id);
//
//	if(!product)
//	return(
//<div>
//	{id}
//	<h3>APPLe</h3>
//</div>)
//}
//export default ProductDetails

import { getProductById, getSimilarProducts } from "@/lib/actions";
import { Product } from "@/types";
import { redirect } from "next/navigation";

import Image from "next/image";
import { Link } from "heroicons-react";
import { formatNumber } from "@/lib/utils";


type Props ={
	params: { id: string}
}
const ProductDetails = async( { params:{ id }}: Props) => {
	const product: Product = await getProductById(id);
    
	if(!product) redirect('/')

	const similarProducts = await getSimilarProducts(id);


  return (
	<div className="product-container">
		<div className="flex gap-28 xl:flex-row flex-col">
			<div className="product-image">
				<Image
                 src={product.image}
				 alt={product.title}
				 width={580}
				 height={400}
				 className="mx-auto"
                />
				
			</div>

			<div className="flex-1 flex flex-col">
				<div className="flex justify-between items-start gap-5 flex-wrap pb-6">
					<div className="flex flex-col gap-3">
						<p className="text-[28px] text-secondary font-semibold">
							{product.title}
						</p>
						<Link
						href={product.url}
						target="_blank"
						className="text-base text-blank opacity-50">
							Visit Product
						</Link>
					</div>

					<div className="flex items-center gap-3">
						<div className="product-hearts">
							<Image
							src="assets/icons/red-heart.svg"
							alt="heart"
							width={20}
							height={20}
							/>

							<p className="text-base font-semibold text-[#D46F77]">
								{product.reviewsCount}
							</p>
						</div>
						<div className="p-2 bg-white-200 rounded-10">
							<Image
							src="/assets/icons/bookmark.svg"
							alt="bookmark"
							width={20}
							height={20}
							/>
						</div>

						<div className="p-2 bg-white-200 rounded-10">
							<Image
							src="/assets/icons/share.svg"
							alt="share"
							width={20}
							height={20}
							/>
						</div>
					</div>
				</div>
				<div className="product-info">
					<div className="flex flex-col gap-2">
						<p className="text-[34px] text-secondary font-bold">
							{product.currency} {formatNumber(product.currentPrice)}
						</p>

						<p className="text-[21px] text-black opacity-50 line-through">
							{product.currency} {formatNumber(product.originalPrice)}
						</p>
					</div>

					<div className="flex flex-col gap-4">
						<div className="flex gap-3">
                          <div className="product-stars">
							<Image
							src="/assets/icons/star.svg"
							alt="star"
							width={16}
							height={16}
							/>
						  </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	  { id }
	</div>
  )
}

export default ProductDetails
