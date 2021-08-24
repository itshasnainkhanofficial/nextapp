import Link from 'next/link';

function index( {posts}) {
    return (
        <div>
            <h1>All Posts</h1>            
            <div>
                {
                    posts.map(post => {
                        return (
                            <div key={post.id}>
                                <h1>{post.id}</h1>

                                <Link href={`/fallbacktrue/post/${post.id}`} passHref>
                                <h3>{post.title}</h3>
                                </Link>

                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default index


export async function getStaticProps() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsJson = await posts.json();
    return {
        props: {
            // posts: postsJson.slice(0,3)
            posts: postsJson
        }
    }
}

