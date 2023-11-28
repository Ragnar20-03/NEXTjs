import { notFound } from "next/navigation"


export default function ReviewDetail({params} :
            // reviewID and productId should be named as teir folders  
    {params : {reviewId : string , productid : string}})
{
    if (parseInt(params.reviewId )> 100)
    {
        notFound()
    }
    return(
        <div>
            <h1>Review {params.reviewId} for product {params.productid}</h1>
        </div>
    )
}