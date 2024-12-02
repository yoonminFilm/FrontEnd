import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './projectCarousel.css'

function ProjectCarousel() {
  const filmDigitalMainImg = "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/film_main_img.jpg";
  const urbanpatternMainImg = "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/urbanpattern_main_img.jpg";
  const snapMainImg = "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/snap_main_image.JPG";
  const reflectingCityMainImg = "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/urbanpattern_main_img.jpg";
  
  return (
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <Link to="../project/mainWorkPhoto">
        <img
          className="d-block w-100"
          src={filmDigitalMainImg}
          alt="Film & Digital Work"
        />
        <Carousel.Caption>
          <h5>Project 1. Film & Digital Work</h5>
          <p style={{color:"white"}}>
            Original, Film & Digital work
          </p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="../project/urbanPattern">
        <img
          className="d-block w-100"
          src={urbanpatternMainImg}
          alt="Urbanpattern"
        />
        <Carousel.Caption>
          <h5>Project 2. Urbanpattern of City</h5>
          <p style={{color:"white"}}>
            Original, Urban Pattern
          </p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="../project/reflectingCity">
        <img
          className="d-block w-100"
          src={reflectingCityMainImg}
          alt="reflecting city"
        />
        <Carousel.Caption>
          <h5>Project 3. Reflecting City</h5>
          <p style={{color:"white"}}>
            Capturing the city created by light with water
          </p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="../project/snap">
        <img
          className="d-block w-100"
          src={snapMainImg}
          alt="Snap"
        />
        <Carousel.Caption>
          <h5>Project 4. Portrait Snap</h5>
          <p style={{color:"white"}}>
            Cinematic, Original portrait snap.
          </p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectCarousel;