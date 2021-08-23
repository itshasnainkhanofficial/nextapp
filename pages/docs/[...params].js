import {useRouter} from 'next/router'
function Docs() {
    const router = useRouter();
    // const {params} = router.query; as first elemenet is empty due to pre-rendering
    const {params = []} = router.query;
    console.log(params);

    if(params.length === 2) {
        return (
            <h1>Viewing docs of Feature {params[0]} and concept {params[1]}</h1>
        )
    }
    else if(params.length === 1) {
        return (
            <h1>Viewing docs of Feature {params[0]}</h1>
        )
    }
    
    return (
        <div>
            <h1>Docs Page</h1>
        </div>
    )
}

export default Docs
