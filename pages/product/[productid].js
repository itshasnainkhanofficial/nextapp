// function ProductDetails() {
//     return (
//         <div>
//             Product Details page
//         </div>
//     )
// }

// export default ProductDetails



import {useRouter} from 'next/router'
function ProductDetails() {
    const router = useRouter() // returns router object
    const productid = router.query.productid // returns productid the name 'productid' same as file name
    return (
        <div>
            Product Details page {productid}
        </div>
    )
}

export default ProductDetails
