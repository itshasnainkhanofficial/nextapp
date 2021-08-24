
function SinglePost( { post }) {
    return (
        <div>
            <h1>Post id - {post.id}</h1>
            <h2>Post title - {post.title}</h2>
            <p>Post body - {post.body}</p>
        </div>
    )
}

export default SinglePost

// export async function getStaticPaths(){
    
//     return {

//         paths : [
//             {
//                 params : { postid : '1' }
//             },
//             {
//                 params : { postid : '2' }
//             },
//             {
//                 params : { postid : '3' }
//             }
//         ]
//         , fallback : false
//     }
// }


export async function getStaticPaths(){
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsJson = await posts.json();
    
    const paths = postsJson.map(post => {
        return {
            params : { postid : `${post.id}` }
        }
    });

    return {

    paths : paths,
    fallback : false

    }
}


export async function getStaticProps(context){

    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const data = await response.json();

    return {
        props : {

            post : data

        }
    }
}