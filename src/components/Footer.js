import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FooterComponents() {
  return (
    <footer>
      <Container>
          <Row className="justify-content-md-center">        
            <Col xs sm={4} className='justify-content-md-start  align-items-end'>
            © 2024 Sungmin Yoon All rights reserved.
            </Col>
            <Col xs sm={2}>
              <a href='mailto:ysmgg1@naver.com'>Email</a>
            </Col>
            <Col xs sm={2}>
              <a href='https://www.instagram.com/yoonmin_film/'>Instagram</a>
            </Col>
            <Col xs sm={2}>
              <a href='https://www.youtube.com/@friendly-dark-army'>Youtube(FDA)</a>
            </Col>
          </Row>          
      </Container>
    </footer>
  );
}

export default FooterComponents;