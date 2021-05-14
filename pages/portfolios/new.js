import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'
import {  Row, Col } from 'reactstrap';
import PortfolioForm from '../../components/PortfolioForm'
import {useCreatePortfolio} from '../../actions/portfolios'
import {useRouter} from 'next/router'

const PortfolioNew = () => {

    const router = useRouter()
    const [createPortfolio,{data,loading,error}] = useCreatePortfolio()
    
    if(data && !error){
       router.push('/portfolios')
    }

    return (
        <BaseLayout>
            <BasePage header="Create Portfolio">
                <Row>
                    <Col md="8">
                    <PortfolioForm onSubmit = {createPortfolio}/>
                        {error &&
                            <div className="alert alert-danger mt-2">{error}</div>
                        }
                    </Col>
                </Row>


            </BasePage>
        </BaseLayout>
    )
}
export default PortfolioNew