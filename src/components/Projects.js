import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ActivityCard } from "./ActivityCard";
import { EducationCard } from "./EducationCard";
import { CertificateCard } from "./CertificateCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Button from 'react-bootstrap/Button';

import kmutnb from "../assets/img/exducation/kmutnb.png";
import etech from "../assets/img/exducation/etech.png";
import pn from "../assets/img/exducation/pn.png";
import sw from "../assets/img/exducation/sw.png";

import a15 from "../assets/img/activity/a15.jpg";
import a8 from "../assets/img/activity/a8.jpg";
import a9 from "../assets/img/activity/a9.jpg";
import a1 from "../assets/img/activity/a1.jpg";
import a4 from "../assets/img/activity/a4.jpg";
import a6 from "../assets/img/activity/a6.jpg";

import cr1 from "../assets/img/certificate/cr1.png";
import cr2 from "../assets/img/certificate/cr2.png";
import cr3 from "../assets/img/certificate/cr3.png";
import cr4 from "../assets/img/certificate/cr4.png";
import cr5 from "../assets/img/certificate/cr5.png";
import cr6 from "../assets/img/certificate/cr6.png";

  // const educationList = [
  //   {
  //     image: kmutnb,
  //     title: "King Mongkut's University of Technology North Bangkok",
  //     educationLevel: "Education Level : Bachelor Degree",
  //     gpax: "GPAX : 3.03"
  //   },
  //   {
  //     image: etech,
  //     title: "Eastern Technological College (E.TECH)",
  //     educationLevel: "Education Level : Higher Vocational Certificate",
  //     gpax: "GPAX : 3.98"
  //   },
  //   {
  //     image: etech,
  //     title: "Eastern Technological College (E.TECH)",
  //     educationLevel: "Education Level : Vocational Certificate",
  //     gpax: "GPAX : 3.94"
  //   },
  //   {
  //     image: pn,
  //     title: "Preechanusas School",
  //     educationLevel: "Education Level : Junior High School",
  //     gpax: "GPAX : 3.48"
  //   },
  //   {
  //     image: sw,
  //     title: "SutharatWatthanalai School",
  //     educationLevel: "Education Level : Elementary School",
  //     gpax: "GPAX : 3.18"
  //   }
  // ];

  export const Projects = () => {
    const educationList = [
      { title: "King Mongkut's University of Technology North Bangkok", 
        educationLevel: "Education Level : Bachelor Degree",
        gpax: "GPAX : 3.03",
        imgUrl: kmutnb },
      { title: "Eastern Technological College (E.TECH)",  
        educationLevel: "Education Level : Higher Vocational Certificate",
        gpax: "GPAX : 3.98",
        imgUrl: etech },
      { title: "Eastern Technological College (E.TECH)",
        educationLevel: "Education Level : Vocational Certificate",
        gpax: "GPAX : 3.94",
        imgUrl: etech },
      { title: "Preechanusas School",
        educationLevel: "Education Level : Junior High School",
        gpax: "GPAX : 3.48",
        imgUrl: pn },
      { title: "SutharatWatthanalai School", 
        educationLevel: "Education Level : Elementary School",
        gpax: "GPAX : 3.18",
        imgUrl: sw },
    ]

    const activity = [
      { title: "29th National Skill Competition, Regional Level", imgUrl: a15 },
      { title: "24th Thailand Computer Programming Development Competition (NSC2022)", imgUrl: a8 },
      { title: "Certificate from E.Coding Club Training",  imgUrl: a9 },
      { title: "Computer for Environmental Awareness at Bangsaen Beach", imgUrl: a1 },
      { title: "iMovie Video Creation Course on iPad", imgUrl: a4 },
      { title: "Internal Computer Department Skill Competition, Vocational Level, Website Development", imgUrl: a6 },
    ]
    
    const certificate = [
      { title: "Gold Medal",description: "Database Management Systems, Higher Vocational Certificate Level", imgUrl: cr1 },
      { title: "Bronze Medal",description: "Website Development, Vocational Certificate Level", imgUrl: cr2 },
      { title: "1st Runner-Up",description: "Website Development Skills, Vocational Certificate Level", imgUrl: cr3 },
      { title: "Training",description: "Personality and Presentation Skills" ,  imgUrl: cr4 },
      { title: "Training",description: "Basic AR, VR, MR, and 3D Skills", imgUrl: cr5 },
      { title: "Training",description: "Coding for Metaverse", imgUrl: cr6 },
    ];

    
      

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                <h2 style={{ marginBottom: '50px',color: ' #424689' }}> Background </h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Activity</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificate</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                      {/*Education */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {educationList.map((education, index) => (
                            <EducationCard key={index} {...education} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/*Education */}

                      {/* Activity */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {activity.map((act, index) => (
                            <ActivityCard key={index} {...act} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* Activity */}

                      {/* Certificate */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {certificate.map((cer, index) => (
                            <CertificateCard key={index} {...cer} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* Certificate */}

                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
