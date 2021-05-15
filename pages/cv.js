import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import {Row,Col} from 'reactstrap'
const CV = () => {
 

  return (
    <BaseLayout>
      <BasePage title = "Curriculum Erikson">
        
      <Row>
        <Col md = {{size:8,offset:2}}>
          <iframe style={{width: '100%',height:'800px'}} src="/jerga_cv.pdf"></iframe>
        </Col>
      </Row>
      </BasePage>
    </BaseLayout>
  )
}
export default CV