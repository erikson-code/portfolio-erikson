import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'
import {  Row, Col } from 'reactstrap';
import PortfolioForm from '../../components/PortfolioForm'

const PortfolioNew = () => {

    return (
        <BaseLayout>
            <BasePage header="Create Portfolio">


                <Row>
                    <Col md="8">
                        
                    <PortfolioForm/>

                    </Col>
                </Row>


            </BasePage>
        </BaseLayout>
    )
}
export default PortfolioNew