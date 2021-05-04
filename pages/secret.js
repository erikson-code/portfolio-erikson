import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { useSession, signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

const Secret = () => {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) {
    return <p>Loading ...</p>
  }

  if (session == null) {

    signIn("auth0")
    return null 
  } else {
    return (
      <BaseLayout>
        <BasePage>
          <h1>I am secret {session.user.name}
            {

            }
          </h1>
        </BasePage>
      </BaseLayout>
    )
  }



}
export default Secret