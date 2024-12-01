import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailIcon from '../assets/images/square-email.svg';
import instagramIcon from '../assets/images/square-instagram.svg';
import youtubeIcon from '../assets/images/square-youtube.svg';

function FooterComponents() {
  return (
    <footer>
      <Container>
          <Row className="justify-content-md-center">        
            <Col xs sm={4} className='justify-content-md-start  align-items-end'>
            <h2 className='footer-text'>© 2024 Sungmin Yoon All rights reserved.</h2>
            </Col>
            <Col xs sm={2}>
            </Col>
            <Col xs sm={2}>
              <a href='mailto:ysmgg1@naver.com' target='_blank'><img src={emailIcon} alt="email icon" className='footer-svg'/></a>
            </Col>
            <Col xs sm={2}>
              <a href='https://www.instagram.com/yoonmin_film/' target='_blank'><img src={instagramIcon} alt="email icon" className='footer-svg'/></a>
            </Col>
            <Col xs sm={2}>
              <a href='https://www.youtube.com/@friendly-dark-army' target='_blank'><img src={youtubeIcon} alt="email icon" className='footer-svg'/></a>
            </Col>
          </Row>          
      </Container>
    </footer>
  );
}

export default FooterComponents;