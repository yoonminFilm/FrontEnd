import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import'./shopCard.css';

function ShopCard() {
    const shopImgExample ="https://yoonminfilm-images.s3.ap-northeast-2.amazonaws.com/shop_example_img.jpg";
  return (
    <Card style={{ width: '18rem'}} className="Card">
      <Card.Img variant="top" src={shopImgExample} />
      <Card.Body>
        <Card.Title>Shop Card Example</Card.Title>
        <Card.Text className="cardText">
          상품 예제를 위한 카드 입니다.
        </Card.Text>
        <Button variant="primary">자세히보기</Button>
      </Card.Body>
    </Card>
  );
}

export default ShopCard;