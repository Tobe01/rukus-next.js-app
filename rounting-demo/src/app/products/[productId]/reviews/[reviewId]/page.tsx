import { notFound } from "next/navigation";

export default async function ReviewProduct({
  params,
} : {
  params : Promise<{productId: string, reviewId: string}>
}){
  const { productId, reviewId } = await params;
  if(parseInt(reviewId) > 1001){
    notFound();
  }
  return(
    <h1>Review {reviewId} for Product {productId}</h1>
  )
}