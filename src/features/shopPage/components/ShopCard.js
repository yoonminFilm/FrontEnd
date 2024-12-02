import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import'./shopCard.css';

const  ShopCard =({title, description, imageUrl, onButtonClick}) =>{
    const shopImgExample ="https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/shop_example_img.jpg";
  return (
    <Card className="Card">
      <Card.Img variant="top" className="card-img" src={imageUrl} />
      <Card.Body className='card-info-body'>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="card-text">
          {description}
        </Card.Text>
        <Button className='card-button' variant="light" onClick={onButtonClick}>자세히 보기</Button>
      </Card.Body>
    </Card>
  );
}

export default ShopCard;