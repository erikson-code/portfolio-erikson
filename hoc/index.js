import { useSession, signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

const withAuth = (Component) => {

    return props => {

        const [session, loading] = useSession()
        const router = useRouter()

        if (loading) {
            return <p>Loading ...</p>
        }
        if (session == null) {

            signIn("auth0")
            return null
        } else {
            return <Component user={session.user.name} loading={loading} {...props}></Component>
            
        }
    }
}

export default withAuth