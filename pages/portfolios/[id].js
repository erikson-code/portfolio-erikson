import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'
import { useGetData } from '../../actions'
import axios from 'axios'
const Portfolio = (req) => {

    const { id } = req

    const url = `http://localhost:3000/api/${id}`

    const { data: portfolio, error, loading } = useGetData(url)


    return (
        <BaseLayout>
            <BasePage>
                {loading && <p>Loading page ...</p>}
                {error && <div className="alert alert-danger">{error.message}</div>}

                {portfolio &&
                    <>
                        <h1>I am Portfolio Detail</h1>
                        <h1>{portfolio.title}</h1>
                        <p>Body: {portfolio.body}</p>
                        <p>{portfolio.id}</p>
                    </>
                }
            </BasePage>
        </BaseLayout>

    )


}

Portfolio.getInitialProps = async ({ query }) => {

    const { id } = query


    return { id }


}



export default Portfolio