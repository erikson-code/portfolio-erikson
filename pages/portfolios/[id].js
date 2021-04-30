import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'
import { useGetData } from '../../actions'
import { useRouter } from 'next/router'

const Portfolio = () => {
    const router = useRouter()
    const { data: portfolio, error, loading } = 
    useGetData(router.query.id ? `/api/v1/posts/${router.query.id}`: null)
    debugger

    return (
        <BaseLayout>
            <BasePage>
                {loading && <p>Loading page ...</p>}
                {error && <div className="alert alert-danger">{error.message}</div>}

                {portfolio &&
                    <>
                        <h1>I am Portfolio Detail</h1>
                        <h1>{portfolio.title}</h1>
                        <p>Body:{portfolio.body}</p>
                        <p>{portfolio.id}</p>
                    </>
                }
            </BasePage>
        </BaseLayout>

    )


}




export default Portfolio