import vscode from "../assets/img/skill/vscode.png";
import premiere from "../assets/img/skill/premiere.png";
import access from "../assets/img/skill/access.png";
import word from "../assets/img/skill/word.png";
import excel from "../assets/img/skill/excel.png";
import react  from "../assets/img/skill/logo192.png";
import java from "../assets/img/skill/java.png";
import  c from "../assets/img/skill/c.png";
import ct from "../assets/img/skill/ct.png";
import t from "../assets/img/skill/t.png";
import r from "../assets/img/skill/r.png";
import persistence from "../assets/img/skill/persistence.png";
import listen from "../assets/img/skill/listen.png";
import emotional from "../assets/img/skill/emotional.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/banner-bg.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills" style={{ backgroundColor: 'white' }}>
       
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" style={{ color: ' #424689' }}>
                        <h2>Hard Skills</h2>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <img src={access} alt="Image" />
                                <h5>Microsoft Access</h5>
                            </div>
                            <div className="item">
                                <img src={word} alt="Image" />
                                <h5>Microsoft Word</h5>
                            </div>
                            <div className="item">
                                <img src={excel} alt="Image" />
                                <h5>Microsoft Excel</h5>
                            </div>
                            <div className="item">
                                <img src={vscode} alt="Image" />
                                <h5>Visual Studio Code</h5>
                            </div>
                            <div className="item">
                                <img src={premiere} alt="Image" />
                                <h5>Adobe Premiere Pro</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C</h5>
                            </div>
                            

                        </Carousel>
                    </div>

                    <div className="skill-bx wow zoomIn" style={{ color: ' #424689' }}>
                        <h2>Soft Skills</h2>
                       
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <img src={ct} alt="Image" />
                                <h5>Critical thinking</h5>
                            </div>
                            <div className="item">
                                <img src={t} alt="Image" />
                                <h5>Teamwork</h5>
                            </div>
                            <div className="item">
                                <img src={r} alt="Image" />
                                <h5>Responsibility</h5>
                            </div>
                            <div className="item">
                                <img src={persistence} alt="Image" />
                                <h5>Resilience</h5>
                            </div>
                            <div className="item">
                                <img src={listen} alt="Image" />
                                <h5>Active Listening</h5>
                            </div>
                            <div className="item">
                                <img src={emotional} alt="Image" />
                                <h5>Emotional Intelligence</h5>
                            </div>
                            

                        </Carousel>
                    </div>

                </div>
            </div>
        </div>
        
    </section>
    
  )
}
