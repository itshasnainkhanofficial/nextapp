
// function AllEvents({events}) {
//     return (
//         <div>
//             {
//                 events.map( event => {
//                     return (
//                         <div key={event.id}>
//                             <h1 >{event.title}</h1>
//                             <div >{event.description}</div>
//                             <div >{event.category}</div>
//                             <hr />
//                         </div>

//                     );
//                 })
//             }
//         </div>
//     )
// }

// export default AllEvents


// export async function getServerSideProps(){
//     const response = await fetch('http://localhost:4000/events');
//     const data = await response.json();

//     return {
//         props : {
//             events : data
//         }
//     }
// }




// // filtering events
// import { useState } from 'react'
// function AllEvents({events}) {
//     const [filteredEvents, setFilteredEvents] = useState(events)

//     const filterEvent = async () => {
//         const response = await fetch('http://localhost:4000/events?category=sports');
//         const data = await response.json();
//         setFilteredEvents(data);
//     }
//     return (
//         <div>
//             <button onClick={filterEvent}>Sports</button>
//             {
//                 filteredEvents.map( event => {
//                     return (
//                         <div key={event.id}>
//                             <h1 >{event.title}</h1>
//                             <div >{event.description}</div>
//                             <div >{event.category}</div>
//                             <hr />
//                         </div>

//                     );
//                 })
//             }
//         </div>
//     )
// }

// export default AllEvents


// export async function getServerSideProps(){
//     const response = await fetch('http://localhost:4000/events');
//     const data = await response.json();

//     return {
//         props : {
//             events : data
//         }
//     }
// }

// filtering events using shallow routing
import { useState } from 'react'
import {useRouter} from 'next/router'

function AllEvents({events}) {
    const [filteredEvents, setFilteredEvents] = useState(events)
    const router = useRouter();

    const filterEvent = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json();
        setFilteredEvents(data);
        router.push('/preplusclient?category=sports' , undefined , {shallow : true});
    }
    return (
        <div>
            <button onClick={filterEvent}>Sports</button>
            {
                filteredEvents.map( event => {
                    return (
                        <div key={event.id}>
                            <h1 >{event.title}</h1>
                            <div >{event.description}</div>
                            <div >{event.category}</div>
                            <hr />
                        </div>

                    );
                })
            }
        </div>
    )
}

export default AllEvents


export async function getServerSideProps(context){
    const { query } = context;
    const { category } = query;
    const queryString = category ? "category=sports" : "";

    const response = await fetch(`http://localhost:4000/events?${queryString}`);
    const data = await response.json();

    return {
        props : {
            events : data
        }
    }
}