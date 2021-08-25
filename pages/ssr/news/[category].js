function ArticaleListByCategory({articles, category}) {
    return (
        <div>
            <h1>{category}</h1>
            {
                articles.map(article => {
                    return (
                        <div key={article.id}>
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default ArticaleListByCategory



export async function getServerSideProps(context){
    console.log('Getting news by category')

    // const {params} = context;
    const {params , req , res , query} = context;
    console.log(query);
    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie' , ['name=hasnain'])
    const {category} = params;

    const news = await fetch(`http://localhost:4000/news?category=${category}`)
    const newsjson = await news.json()

    return {

        props : {
            articles : newsjson,
            category : category
        }

    }
}