import {useEffect , useState} from 'react'

function Deshboard() {
    const [isLoading, setisLoading] = useState(true)
    const [deshBoardData, setdeshBoardData] = useState(null)


 useEffect(() => {
        async function fetchData() {
        const data = await fetch('http://localhost:4000/deshboard');
        const deshboardData = await data.json();
        setdeshBoardData(deshboardData);
        setisLoading(false);
    }
    
    fetchData();
 }, [])

 if(isLoading) {
    return <h1>loading...</h1>
 }

    return (
        <div>
            <h1>Deshboard</h1>
            <p>Posts - {deshBoardData.posts}</p>
            <p>comments - {deshBoardData.comments}</p>
            <p>likes - {deshBoardData.likes}</p>
            <p>shares - {deshBoardData.shares}</p>
            <p>followers - {deshBoardData.followers}</p>
            <p>following - {deshBoardData.following}</p>
        </div>
    )
}

export default Deshboard
