import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Row, Col } from 'reactstrap';
const About = () => {
  const createFadeInClass = () => {
    if (typeof window !== 'undefined') {
      return window.__isAboutLoaded ? '' : 'fadein';
    }

    return 'fadein';
  }
  return (
    <BaseLayout>
      <BasePage className = "about-page" title="About me Erikson">
      <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4>
              <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>My name is Erikson and I am an experienced software engineer and freelance developer. </p>
              <p>
              I have a Master's degree in Artificial Intelligence and several years of experience working
              on a wide range of technologies and projects from C++ development for ultrasound devices to
                modern mobile and web applications in React and Angular.
              </p>
              <p>
              Throughout my career, I have acquired advanced technical knowledge and the ability to explain
              programming topics clearly and in detail to a broad audience. I invite you to take my course,
              where I have put a lot of effort to explain web and software engineering concepts in a detailed,
              hands-on and understandable way.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}
export default About