import { Row, Col } from "react-bootstrap";
import { Education } from "./App";

interface IEducationItem{
    item: Education
}

function EducationItem({item}: IEducationItem){
    return (
        <Row style={{ marginTop: 10 }}>
          <Col className='col-3'>
            <p className='time'>{item.from} - {item.to}</p>
          </Col>
          <Col style={{ marginLeft: 10 }}>
            <p className='institution'>{item.institution}</p>
            <p className='description'>{item.description}</p>
          </Col>
        </Row>
      )
}

export default EducationItem