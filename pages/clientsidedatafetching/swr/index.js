import useSWR from 'swr'

async function fetcher() {
    const data = await fetch('http://localhost:4000/deshboard');
    const deshboardData = await data.json();
    return deshboardData;
}

function Deshboard() {
  const { data, error } = useSWR('deshboard', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
        <h1>Deshboard</h1>
        <p>Posts - {data.posts}</p>
        <p>comments - {data.comments}</p>
        <p>likes - {data.likes}</p>
        <p>shares - {data.shares}</p>
        <p>followers - {data.followers}</p>
        <p>following - {data.following}</p>
    </div>
)
}
export default Deshboard