// import React from 'react'

// function AllCustomers() {
//     return (
//         <div>
//             <h1>C1</h1>
//             <h1>C2</h1>
//             <h1>C3</h1>
//         </div>
//     )
// }

// export default AllCustomers



// // Add navigation link
// import Link from 'next/link'

// function AllCustomers() {
//     return (
//         <div>
//             <Link href="c1">
//                 <a> Customer 1 </a>
//             </Link>
//             <Link href="c2">
//                 <a> Customer 2 </a>
//             </Link>
//             <h1>C3</h1>
//         </div>
//     )
// }

// export default AllCustomers



// Add navigation link and use of props
import Link from 'next/link'

function AllCustomers({customerid = '100'}) {
    return (
        <div>
            <Link href="/customer/1">
                <a> Customer 1 </a>
            </Link>
            <Link href="/customer/2">
                <a> Customer 2 </a>
            </Link>
            {/* replace current history with the main entry point */}
            <Link href="/customer/3" replace>
                <a> Customer 3 </a>
            </Link>
            <Link href={`/customer/${customerid}`}>
                <a> Customer 100 </a>
            </Link>
            
        </div>
    )
}

export default AllCustomers
