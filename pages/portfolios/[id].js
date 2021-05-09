import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'
import PortfoliosApi from '../../lib/api/portfolios'
const Portfolio = ({portfolio}) => {


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

export async function getServerSideProps({query}){
    const json = await new PortfoliosApi().getById(query.id)
    const portfolio = json.data


    return {
        props:{portfolio}
    }
}


export default Portfolio