

import { Row,Col} from 'reactstrap';
import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'
import PortfolioCard from '../../components/PortfolioCard'
import PortfoliosApi from '../../lib/api/portfolios'
import {useRouter} from 'next/router'

const Portfolio = ({ portfolios }) => {
    const router = useRouter()

    return (

        <BaseLayout >
            <BasePage 
            header="Portfolios"
            className="portfolio-page">
                <Row>

                    {portfolios.map(portfolio => 
                     <Col 
                     onClick = {()=>{
                        router.push(`/portfolios/${portfolio._id}`)

                     }}
                     md="4"
                      key={portfolio._id}>
                        <PortfolioCard portfolio={portfolio}></PortfolioCard>
                        </Col>
                    )

                    }
                </Row>

            </BasePage>
        </BaseLayout>
    )

}

export async function getServerSideProps({query}){
    const json = await new PortfoliosApi().getAll(query)
    const portfolios = json.data


    return {
        props:{portfolios}
    }
}


export default Portfolio