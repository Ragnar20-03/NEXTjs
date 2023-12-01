
import { Metadata } from "next"

type Props = {
    params : {
        productid : string
    }
}

export const generateMetaData = ({params} : Props): Metadata => {
    return{
        title:`Product ${params.productid}`
    }
}


export default function ProductDetail({params , } :Props )
{
    return(
        <div>
            <h1>Detail of  product {params.productid} </h1>
        </div>
    )
}