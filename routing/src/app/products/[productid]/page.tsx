export default function ProductDetail({params} :
    {params : {productid : string }})
{
    return(
        <div>
            <h1>Detail of  product {params.productid} </h1>
        </div>
    )
}