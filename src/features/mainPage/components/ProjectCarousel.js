import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { getImageUrl, IMAGE_PATHS } from '../../../config/cdn';
import '../styles/projectCarousel.css'

function ProjectCarousel() {
  const EU25MainImg = getImageUrl(IMAGE_PATHS.PROJECTS.EU25_MAIN);
  const DigitalMainImg = getImageUrl(IMAGE_PATHS.PROJECTS.DIGITAL_MAIN);
  const filmMainImg = getImageUrl(IMAGE_PATHS.PROJECTS.FILM_MAIN);
  const urbanpatternMainImg = getImageUrl(IMAGE_PATHS.PROJECTS.URBAN_PATTERN_MAIN);
  const reflectingCityMainImg = getImageUrl(IMAGE_PATHS.PROJECTS.REFLECTING_CITY_MAIN);
  const snapMainImg = getImageUrl(IMAGE_PATHS.PROJECTS.SNAP_MAIN);
  // const collabrativeMainImg = "";
  
  return (
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <Link to="../project/euMonthTravel">
        <img
          className="d-block w-100"
          src={EU25MainImg}
          alt="EU Work"
        />
        <Carousel.Caption>
          <h5>Project 1. 28 days of European records</h5>
          <p style={{color:"white"}}>
            28 days of European records
          </p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="../project/digitalWork">
        <img
          className="d-block w-100"
          src={DigitalMainImg}
          alt="Digital Work"
        />
        <Carousel.Caption>
          <h5>Project 2. Digital Work</h5>
          <p style={{color:"white"}}>
            Original, yoonmin_Film
          </p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="../project/filmWork">
        <img
          className="d-block w-100"
          src={filmMainImg}
          alt="Film Work"
        />
        <Carousel.Caption>
          <h5>Project 3. Film Work</h5>
          <p style={{color:"white"}}>
            Original Film, yoonmin_Film
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
          <h5>Project 4. Urbanpattern of City</h5>
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
          <h5>Project 5. Reflecting City</h5>
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
          <h5>Project 6. Portrait Snap</h5>
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