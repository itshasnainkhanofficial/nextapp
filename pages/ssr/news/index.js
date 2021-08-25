
function NewsArticalList( {articals} ) {
    return (
        <div>
            <h1>List Of All News</h1>            
            {
                articals.map(
                    articale => {
                        return (
                            <div key={articale.id}>
                                <h2>{articale.title}</h2>
                                <p>{articale.content}</p>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default NewsArticalList


export async function getServerSideProps(){
    console.log('Getting all news')
    const news = await fetch('http://localhost:4000/news')
    const newsjson = await news.json()

    return {

        props : {
            articals : newsjson
        }

    }
}