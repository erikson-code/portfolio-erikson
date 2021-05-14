import React, { useEffect, useRef } from 'react';
import BaseLayout from 'components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed'
import {useState} from 'react'

const roles = ["Developer", "TI", "React JS", "Angular"]

const Index = () => {

  const [isFlipping,setIsFlipping] = useState(true)
  const flipInterval = useRef()

  useEffect(()=>{
    animaterCard();

    return ()=> flipInterval.current && clearInterval(flipInterval.current)
  },[])

  const animaterCard = ()=>{
    flipInterval.current =  setInterval(()=>{

      setIsFlipping(prevFliping => !prevFliping)
    },10000)
  }
 

  return (
    <BaseLayout
      navClass="transparent"
      className={`cover ${isFlipping? 'cover-orange': 'cover-blue' }`}>
      <div className="main-section">
        <div className="background-image">
          <img src="/images/background-index.png" />
        </div>
        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper ${isFlipping ? 'isFlipping':''}`}>
                  <div className="front">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                        </div>
                    </div>
                    <img className="image" src="/images/section-1.png" />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>

                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                        </div>
                    </div>
                    <img className="image" src="/images/section-2.png" />
                    <div className="shadow-custom-orange">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Welcome to the portfolio website of Erikson.
                  Get informed, collaborate and discover projects I was working on through the years!
                  </h1>
              </div>
              <Typed
                loop
                typeSpeed={70}
                backSpeed={70}
                backDelay={1000}
                strings={roles}
                showCursor
                className="self-typed"
                cursorChar="|">

              </Typed>

              <div className="hero-welcome-bio">
                <h1>
                  Let's take a look on my work.
                  </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  )
}


export default Index;




