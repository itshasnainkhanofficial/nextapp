// for resolving flag true error
import {useRouter} from 'next/router'

function SingleProduct( { product }) {
    const router = useRouter();
    if(router.isFallback){
        return <h1>loading...</h1>
    }
    return (
        <div>
            <h1>Product id - {product.id}</h1>
            <h2>Product title - {product.title}</h2>
            <p>Product description - {product.description}</p>
        </div>
    )
}

export default SingleProduct

export async function getStaticPaths(){
    
    return {

        paths : [
            {
                params : { productid : '1' }
            }
        ]
        , fallback : true
    }
}




export async function getStaticProps(context){

    const {params} = context;
    const response = await fetch(`http://localhost:4000/products/${params.productid}`)
    const data = await response.json();

    if(!data.id){

        return {
            notFound : true
        }

    }
    // console.log(`Generating page for /product/${params.productid}`)
    return {
        props : {

            product : data

        }
    }
}