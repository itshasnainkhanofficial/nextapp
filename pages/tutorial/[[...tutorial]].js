// optional catchall routes

import {useRouter} from 'next/router'
function Tutorial() {
    const router = useRouter();
    // const {tutorial} = router.query; as first elemenet is empty due to pre-rendering
    const {tutorial = []} = router.query;
    console.log(tutorial);

    if(tutorial.length === 2) {
        return (
            <h1>Viewing Tutorial of Feature {tutorial[0]} and concept {tutorial[1]}</h1>
        )
    }
    else if(tutorial.length === 1) {
        return (
            <h1>Viewing Tutorial of Feature {tutorial[0]}</h1>
        )
    }
    
    return (
        <div>
            <h1>Tutorial Page</h1>
        </div>
    )
}


export default Tutorial
