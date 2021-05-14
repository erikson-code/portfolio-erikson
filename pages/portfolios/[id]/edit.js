import BaseLayout from '../../../components/layouts/BaseLayout'
import BasePage from '../../../components/BasePage'
import PortfolioForm from '../../../components/PortfolioForm'
import { Col, Row } from 'reactstrap'
import { useUpdatePortfolio } from '../../../actions/portfolios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
const PortfolioEdit = ({ data: initalData }) => {

    const router = useRouter()
    const [updatePortfolio, { data, error }] = useUpdatePortfolio()

    const _updatePortfolio = async (data) => {
        await updatePortfolio(router.query.id, data)
        toast.success('Portfolio has been updated!', { autoClose: 2000 })

    }


    return (
        <BaseLayout>
            <BasePage header="Portfolio Edit">
                <Row>
                    <Col md="8">
                        {initalData &&
                            <PortfolioForm
                                onSubmit={_updatePortfolio} initalData={initalData} />
                        }
                        {error &&
                            <div className="alert alert-danger mt-2">{error}</div>
                        }

                    </Col>
                </Row>

            </BasePage>
        </BaseLayout>

    )


}

export async function getServerSideProps({ query }) {

    const dataRes = await fetch(`${process.env.SITE_URL}/api/portfolios/${query.id}`)

    const portfolio = await dataRes.json()

    return {
        props: {
            data: portfolio
        }
    }
}




export default PortfolioEdit