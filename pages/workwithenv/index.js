import Head from 'next/head'
function WorkWithEnv({title , Description}) {
    return (
        <div>
           <Head>
                <title>{title}</title>
                <meta name="description" content={Description} />
           </Head> 
           <h1>Article</h1>
           <p>
               analyics - {process.env.NEXT_PUBLIC_ANALYTICS_ID}
           </p>
        </div>
    )
}

export default WorkWithEnv

export async function getServerSideProps(){ 
    const db = process.env.DB_USER
    console.log(`db - ${db}`);
    return {
        props : {
            title : 'Blog Title',
            Description : "Blog Description"

        }
    }
}