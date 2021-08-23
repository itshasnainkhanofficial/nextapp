import {useRouter} from 'next/router'

function CustomerDetails() {
    const router = useRouter();
    const customerid = router.query.customerid;
    return (
        <div>
            Welcome to customer {customerid}
        </div>
    )
}

export default CustomerDetails
