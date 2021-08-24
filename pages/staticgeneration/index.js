// function index({users}) {
//     return (
//         <div>
//             <>
//             <h1>list of users</h1>            
//             {
//                 users.map( user => {
//                     return (
//                         <div key={user.id}>
//                             <h2>{user.name}</h2>
//                             <p>{user.email}</p>
//                         </div>
//                     )
//                 })
//             }
//             </>
//         </div>
//     )
// }

// export default index


// export async function getStaticProps() {

//     const users = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(users);
//     const usersJson = await users.json()
//     console.log(usersJson);

//     return {
//         props: {
//             users: usersJson
//         }
//     }
// }



// using components
import User from '../../components/user';
function index({users}) {
    return (
        <div>
            <>
            <h1>list of users</h1>            
            {
                users.map( user => {
                    return (
                        <div key={user.id}>
                            
                        <User users={user}/>

                        </div>
                    )
                })
            }
            </>
        </div>
    )
}

export default index


export async function getStaticProps() {

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersJson = await users.json()

    return {
        props: {
            users: usersJson
        }
    }

}