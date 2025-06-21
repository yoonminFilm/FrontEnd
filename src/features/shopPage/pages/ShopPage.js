import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import ShopCard from "../components/ShopCard";
import { Row, Col } from "react-bootstrap";
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

    const cardData =[
        {   
            id: 1,
            title: "Wedding Photoshoot",
            description: "Capture your beautiful moments with our wedding photography service.",
            imageUrl: "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/shopImg/shopImgExample.JPG"
        },
        {
            id: 2,
            title: "Portrait Session",
            description: "Get a personalized portrait session with professional quality.",
            imageUrl: "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/shopImg/shopImgExample.JPG"
        },
        {
            id: 3,
            title: "Commercial Photography",
            description: "Enhance your business with our professional photography.",
            imageUrl: "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/shopImg/shopImgExample.JPG"
        },
        {
            id: 4,
            title: "Special Events",
            description: "Capture unforgettable memories from your special events.",
            imageUrl: "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/shopImg/shopImgExample.JPG"
        },
        {
            id: 5,
            title: "Family Photoshoot",
            description: "Create timeless memories with your loved ones in our family photoshoots.",
            imageUrl: "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/shopImg/shopImgExample.JPG"
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