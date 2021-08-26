import Head from 'next/head'
function Blogid({title , Description}) {
    return (
        <div>
           <Head>
                <title>{title}</title>
                <meta name="description" content={Description} />
           </Head> 
           <h1>Article</h1>
        </div>
    )
}

export default Blogid

export async function getServerSideProps(){

    return {
        props : {
            title : 'Blog Title',
            Description : "Blog Description"

        }
    }
}