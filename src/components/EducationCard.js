

import { Col } from "react-bootstrap";

export const EducationCard = ({ title, educationLevel, gpax, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx bg-white ">
        <img src={imgUrl} alt={title} className="img-fluid" />
        <div className="proj-txtx" style={{ color: ' #424689' }} >
          <h4 className="text-start">{title}</h4>
          <h5 className="text-start">{educationLevel}</h5>
          <h5 className="text-start">{gpax}</h5>
          
        </div>
      </div>
    </Col>
  );
};

