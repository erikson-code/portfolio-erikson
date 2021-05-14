import BaseLayout from '../../../components/layouts/BaseLayout'
import BasePage from '../../../components/BasePage'
import PortfoliosApi from '../../../lib/api/portfolios'
const Portfolio = ({ portfolio }) => {


    return (
        <BaseLayout>
            <BasePage header="Portfolio Detail">
                {
                    JSON.stringify(portfolio)
                }
            </BasePage>
        </BaseLayout>

    )


}

export async function getStaticPaths() {

    const json = await new PortfoliosApi().getAll()
    const portfolios = json.data

    //Get the paths we want pre-render based on Portfolio ID
    const paths = portfolios.map(portfolio => {

        return {
            params: { id: portfolio._id }
        }

    })

    //Fallback: false means that "not found pages" will be resolved into 404
    return { paths, fallback: false }
}

export async function getStaticProps({params}){
    
    const json = await new  PortfoliosApi().getById(params.id)

    const portfolio = json.data
    return {props: {portfolio},unstable_revalidate:60}

}

export default Portfolio