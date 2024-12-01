import React from "react";
import Container from 'react-bootstrap/Container';
import ShopCard from "../components/ShopCard";
import { Row } from "react-bootstrap";

const ShopPage =()=>{
    return(
        <>
            <Container >       
                <Row>
                <ShopCard />
                <ShopCard />
                </Row>
            </Container>
        </>
    );
}

export default ShopPage;