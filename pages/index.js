import Link from 'next/link'
import {useRouter} from 'next/router'
import { useSession } from 'next-auth/client'

function Home() {
  const [session, loading] = useSession()
  console.log({ session, loading })


  const router = useRouter();
  const handleClick = () => {
    router.push('/product')
  }

  return (

    <div>
      <h1>Home page</h1>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/customer'>
        <a>Customer</a>
      </Link>

      <button onClick={handleClick}>
        Place Order
      </button>

      <Link href="/staticgeneration">
        <a>All users</a>
      </Link>

    {session ? `${session.user.name}, ` : ''}Welcome to Next.js!
    </div>


  )
}

export default Home
