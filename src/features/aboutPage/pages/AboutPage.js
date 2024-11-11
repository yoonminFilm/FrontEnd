import React,{useState} from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const AboutPage = () =>{
    // cosnt [state, useState] = useState('');
    const personalImg = "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/p_img_1.JPG";
    const personalImg2 = "https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/p_img_2.JPG";
    return(
        <>
           <Container>
                <Row>
                    <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" rounded />
                    </Col>
                    <Col xs={6} md={4}>

                    </Col>
                    <Col xs={6} md={4}>
                        <Row>
                        <Image src={personalImg} alt="Sumgin Yoon Img"thumbnail />
                        <Image src={personalImg2} alt="Sumgin Yoon Img2"thumbnail />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default AboutPage;