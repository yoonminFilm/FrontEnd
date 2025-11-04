import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import ShopCard from "../components/ShopCard";
import { Row, Col } from "react-bootstrap";
import { getImageUrl, IMAGE_PATHS } from "../../../config/cdn";
import '../styles/shopPage.css';
import OverlayViewPage from "../../../components/OverlayView";

const ShopPage =()=>{
     // Overlay visibility state
     const [isOverlayVisible, setOverlayVisible] = useState(false);
     const [selectedCard, setSelectedCard] = useState(null);

     // Show overlay with selected card details
     const handleButtonClick = (card) => {
         setSelectedCard(card);
         setOverlayVisible(true);
     };

     // Close overlay
     const handleOverlayClose = () => {
         setOverlayVisible(false);
         setSelectedCard(null);
     };

    const shopExampleImage = getImageUrl(IMAGE_PATHS.SHOP_EXAMPLE);
    const cardData =[
        {
            id: 1,
            title: "Wedding Photoshoot",
            description: "Capture your beautiful moments with our wedding photography service.",
            imageUrl: shopExampleImage
        },
        {
            id: 2,
            title: "Portrait Session",
            description: "Get a personalized portrait session with professional quality.",
            imageUrl: shopExampleImage
        },
        {
            id: 3,
            title: "Commercial Photography",
            description: "Enhance your business with our professional photography.",
            imageUrl: shopExampleImage
        },
        {
            id: 4,
            title: "Special Events",
            description: "Capture unforgettable memories from your special events.",
            imageUrl: shopExampleImage
        },
        {
            id: 5,
            title: "Family Photoshoot",
            description: "Create timeless memories with your loved ones in our family photoshoots.",
            imageUrl: shopExampleImage
        },
    ]

    return(
        <Container className="card-container">       
            <Row>
                {cardData.map((data, index) => (
                    <Col key={index} md={3}>
                        <ShopCard
                            title={data.title}
                            description={data.description}
                            imageUrl={data.imageUrl}
                            onButtonClick={() => handleButtonClick(data)}
                        />
                    </Col>
                ))}
            </Row>
            {isOverlayVisible && (
                <OverlayViewPage isVisible={isOverlayVisible} onClose={handleOverlayClose}>
                    <div className="overlay-content">
                        <h2>{selectedCard?.title}</h2>
                        <p>{selectedCard?.description}</p>
                        <img src={selectedCard?.imageUrl} alt={selectedCard?.title} style={{ width: "100%" }} />
                        <button onClick={handleOverlayClose} className="close-overlay-btn" variant="success">
                            Go to shop
                        </button>
                    </div>
                </OverlayViewPage>
            )}
        </Container>
    );
}

export default ShopPage;