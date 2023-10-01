import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import productsData from '../../redux/Products/Products';
import { addToCart } from '../../redux/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import '../Products/Dproduct.css'
function ProductDetails() {
  const dispatch = useDispatch();

  const { productOffersNo } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const selectedProduct = productsData.find(
    (product) => product.OffersNo === productOffersNo
  );

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const handleAcheterClick = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <Container>
      <Row>
        <Col >
          <div className="img-box">
            <img
              src={require(`../BAImages/${productOffersNo}.png`)}
              alt="Product"
           className="imgP"
            />
          </div>
        </Col>
        
        <Col >
          <div>
            <h1>{selectedProduct.DescriptionOffre}</h1>
            <p>Price: {selectedProduct.PrixResultatOffre}DT</p>
            <div className="modal-button-container">
              <button onClick={() => handleAcheterClick(selectedProduct)}>
                Acheter
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
