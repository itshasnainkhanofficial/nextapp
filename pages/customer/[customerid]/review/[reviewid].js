import {useRouter} from 'next/router'

function Review() {
    const router = useRouter();
    const {customerid, reviewid} = router.query;

    return (
        <div>
            <h1>Customerid - {customerid} , reviewid - {reviewid}</h1>        
        </div>
    )
}

export default Review
