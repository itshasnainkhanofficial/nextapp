// for resolving flag true error
import {useRouter} from 'next/router'

function SinglePost( { post }) {
    const router = useRouter();
    if(router.isFallback){
        return <h1>loading...</h1>
    }
    return (
        <div>
            <h1>Post id - {post.id}</h1>
            <h2>Post title - {post.title}</h2>
            <p>Post body - {post.body}</p>
        </div>
    )
}

export default SinglePost

export async function getStaticPaths(){
    
    return {

        paths : [
            {
                params : { postid : '1' }
            },
            {
                params : { postid : '2' }
            },
            {
                params : { postid : '3' }
            }
        ]
        , fallback : true
    }
}




export async function getStaticProps(context){

    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const data = await response.json();

    if(!data.id){

        return {
            notFound : true
        }

    }
    // console.log(`Generating page for /post/${params.postid}`)
    return {
        props : {

            post : data

        }
    }
}