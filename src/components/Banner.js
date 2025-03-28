import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/B1.png";
import { ArrowDownCircle  } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 style={{ color: '#424689' }}>{`Hi! I'm Nannapath`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p> My name is Nannapath Charoenlapmongkol,<br></br>
Born in 2002 and currently living in Thailand.<br></br>
Email : nannapath.c@gmail.com<br></br>
Click the link below to view my Resume and Portfolio here! </p>
                  

                  <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>


                    <a 
                      href="/pdf/resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        textDecoration: "none",
                        backgroundColor: "#fff7ad",
                        color: "#424689",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        textAlign: "center",
                        width: "150px"
                      }}
                    >
                      Resume
                    </a>

                    <a 
                      href="/pdf/PORTFOLIO21.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        textDecoration: "none",
                        backgroundColor: "#ffa9f9",
                        color: "#424689",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        textAlign: "center",
                        width: "150px"
                      }}
                    >
                      Portfolio
                    </a>
                    
                  </div>

                  <button
  onClick={() => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
Visit Now <ArrowDownCircle size={25} />
</button>


                  


              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
