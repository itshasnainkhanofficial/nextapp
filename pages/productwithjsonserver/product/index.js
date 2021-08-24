import Link from 'next/link';

function index( {products}) {
    return (
        <div>
            <h1>All Products</h1>            
            <div>
                {
                    products.map(product => {
                        return (
                            <div key={product.id}>
                                <h1>{product.id}</h1>

                                <Link href={`/productwithjsonserver/product/${product.id}`} passHref>
                                <h3>{product.title}</h3>
                                </Link>

                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default index


export async function getStaticProps() {
    console.log("regenerating product")
    const products = await fetch('http://localhost:4000/products');
    const productsJson = await products.json();
    return {
        props: {
            // posts: postsJson.slice(0,3)
            products: productsJson
        },
        revalidate: 10
    }
}

