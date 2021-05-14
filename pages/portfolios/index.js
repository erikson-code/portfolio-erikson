

import { Row, Col, Button } from 'reactstrap';
import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'
import PortfolioCard from '../../components/PortfolioCard'
import PortfoliosApi from '../../lib/api/portfolios'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useDeletePortfolio } from '../../actions/portfolios'
import {useState} from 'react'

const Portfolio = ({ portfolios:initialPortfolios }) => {
    const router = useRouter()
    const [portfolios,setPortfolios]= useState(initialPortfolios)
    const [session] = useSession()
    const [deletePortfolio,{data,error}] =useDeletePortfolio()
    
    const _deletePortfolio = async (e,portfolioId)=>{
        e.stopPropagation()
        const isConfirm = confirm('Are you sure want to delete this portfolio? ')
        if(isConfirm){
            await deletePortfolio(portfolioId)
            setPortfolios(portfolios.filter(p=>p._id!== portfolioId))
           
        }
        
    }

    return (

        <BaseLayout >
            <BasePage
                header="Portfolios"
                className="portfolio-page">
                <Row>

                    {portfolios.map(portfolio =>
                        <Col
                            onClick={() => {
                                router.push(`/portfolios/${portfolio._id}`)

                            }}
                            md="4"
                            key={portfolio._id}>
                            <PortfolioCard portfolio={portfolio}>
                                {
                                    session &&
                                    <>
                                        <Button
                                            className="mr-2"
                                            color="warning"
                                            onClick={(e)=>{
                                                e.stopPropagation()
                                            router.push(`/portfolios/${portfolio._id}/edit`)}}>
                                            Edit</Button>
                                        <Button 
                                        color="danger"
                                       onClick={(e)=>_deletePortfolio(e,portfolio._id)}
                                        >
                                            Delete</Button>
                                    </>
                                }

                            </PortfolioCard>


                        </Col>
                    )

                    }
                </Row>

            </BasePage>
        </BaseLayout>
    )

}

export async function getServerSideProps({ query }) {
    const json = await new PortfoliosApi().getAll(query)
    const portfolios = json.data


    return {
        props: { portfolios }
    }
}


export default Portfolio