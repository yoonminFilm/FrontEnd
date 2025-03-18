import React,{useState} from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import AboutText from "../components/AboutText";
import OverlayViewPage from "../../../components/OverlayView";
import Button from 'react-bootstrap/Button';
import { postInquiry } from "../services/aboutServies";


const AboutPage = () =>{
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const personalImg = "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/p_img_1.JPG";
    const [sessionType, setSessionType] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        sessionDate: "",
    });

    const handleSessionTypeClick = (type) => {
        setSessionType(type);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || !formData.sessionDate || !sessionType) {
            alert("Please fill out all required fields!");
            return;
        }

        try {
            const dataToSend = { ...formData, sessionType };
            const response = await postInquiry(dataToSend);
            console.log("Inquiry sent successfully:", response);
            alert("Your inquiry has been sent!");
            setOverlayVisible(false);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
                sessionDate: "",
            });
            setSessionType("");
        } catch (error) {
            console.error("Error sending inquiry:", error);
            alert("There was an error sending your inquiry. Please try again.");
        }
    };

    return(
        <>
           <Container>
                <Row className="justify-content-md-center">
                    <Col xs="auto" md={8}>
                        <AboutText />
                        <Button onClick={() => setOverlayVisible(true)} className="open-overlay-btn" variant="secondary">
                        문의 요청
                        </Button>
                        <OverlayViewPage isVisible={isOverlayVisible} onClose={() => setOverlayVisible(false)}>
                            <div className="inquiry-container">
                                <h1>Send inquiry</h1>
                                <form onSubmit={handleSubmit}>
                                    <span>
                                        <a href="http://pf.kakao.com/_xmyjnn" target="blank">카카오톡으로 신청하기(only for Korean)</a>
                                    </span>
                                    {/* Name Section */}
                                    <div className="form-group">
                                        <label>
                                            <strong className="strong-text">
                                                Name
                                            </strong> 
                                            <span className="required">(required)</span>
                                        </label>
                                        <div className="name-inputs">
                                        <input
                                                type="text"
                                                placeholder="First Name"
                                                required
                                                className="name-input"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                required
                                                className="name-input"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Email Section */}
                                    <div className="form-group email-inputs">
                                        <label>
                                            <strong className="strong-text">
                                                Email
                                            </strong>
                                            <span className="required">(required)</span>
                                        </label>
                                        <input 
                                            type="email" 
                                            placeholder="Email" 
                                            name="email"
                                            required 
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    {/* Session Type Section */}
                                    <div className="form-group">
                                        <label>
                                            <strong className="strong-text">What type of session are you looking for?</strong>
                                            <span className="required">(required)</span>
                                        </label>
                                        <p>
                                            If other, please provide more details on what you are
                                            looking for.
                                        </p>
                                        <div className="session-buttons ">
                                            {["PORTRAIT(개인, 커플, 우정)", "WEDDING(결혼)", "COMMERCIAL(상업)", "COOPERATION(협업)", "OTHER(기타)"].map((type) => (
                                                <Button
                                                    type="button"
                                                    variant="light"
                                                    key={type}
                                                    className={`session-button ${
                                                        sessionType === type ? "active" : ""
                                                    }` }
                                                    onClick={() => handleSessionTypeClick(type)}
                                                >
                                                    {type}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Message Section */}
                                    <div className="form-group flex message-inputs">                                        
                                        <label>
                                            Message <span className="required">(required)</span>
                                        </label>
                                        <textarea 
                                            placeholder="Enter your message here..." 
                                            required
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>

                                    {/* Session Date Section */}                                    
                                    <div className="form-group date-inputs">
                                        <label>Desired task schedule</label>
                                        <p>Please provide task schedule for the photoshoot session.</p>
                                        <input
                                            type="date"
                                            required
                                            name="sessionDate"
                                            value={formData.sessionDate}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button type="submit" className="submit-button" variant="light">
                                        SEND
                                    </Button>
                                </form>
                         </div>
                        </OverlayViewPage>
                    </Col>
                    <Col></Col>
                    <Col md={3}>
                        <Row>
                            <Image src={personalImg} alt="Sumgin Yoon Img" className="about-page-img" />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default AboutPage;