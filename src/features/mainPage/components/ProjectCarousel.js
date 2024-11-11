import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './projectCarousel.css'

function ProjectCarousel() {
  const filmDigitalMainImg = "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/film_main_img.jpg";
  const urbanpatternMainImg = "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/urbanpattern_main_img.jpg";
  const snapMainImg = "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/snap_main_img.jpeg";
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Link to="../project/mainWorkPhoto">
        <img
          className="d-block w-100"
          src={filmDigitalMainImg}
          alt="Film & Digital Work"
        />
        <Carousel.Caption>
          <h5>Project 1. Film & Digital Work</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h5>Project 3. Snap</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectCarousel;