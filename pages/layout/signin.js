// without header footer


function Signin() {
    return (
        <div>
            <h1>Sign in</h1>            
        </div>
    )
}

export default Signin


Signin.getLayout = function PageLayout(page){
    return (
        <>
            {page}
        </>
    )
}