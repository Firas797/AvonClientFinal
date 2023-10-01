import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Modal from 'react-bootstrap/Modal';
import {addToCart} from '../../../../redux/Cart/cartSlice'
import b1 from '../../img/0108200_1.png'
import { useSelector } from "react-redux";

import HommeToilette from '../homme/jsonHomme/HommeToilette'
import Spinner from '../../../Spinner';

function HommeCoffret() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch(); // Get the dispatch function from react-redux
    const [isLoading, setIsLoading] = useState(true);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProductPath, setSelectedProductPath] = useState(null);
    // ...
    
    const openModal = (image) => {
      const product = HommeToilette.find(item => item.OffersNo === image);
      setSelectedImage(image);
      setSelectedProduct(product);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
    const displayedProducts = HommeToilette;
  
    const handleAcheterClick = (item) => {
      dispatch(addToCart(item));
      setSelectedProductPath(`/product/${item.OffersNo}`);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      // Clear the timer when the component unmounts
      return () => clearTimeout(timer);
    }, []);

  return (
    <div>
      
  {isLoading ? (
    <main>
      <Spinner/>
    </main>
  ): (
    <div>  <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
   <span>COFFRET </span>
        </h2>
        <div className="row">
          {displayedProducts.map(product => (
            <div key={product.OffersNo} className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container">
                  {/* Add a button to open the modal */}
                  <button  className="acheter-button" onClick={() => openModal(product.OffersNo)}> Voir</button>



                </div>
                <div className="img-box">
                <img
                    src={require(`../../img/${product.OffersNo}_1.png`)}
                    alt="Selected"
                    className="modal-image"
                    onError={(e) => {
                      e.target.src = b1;
                    }}
                  />
                  
                </div>
                <hr />
                <hr />

                <div className="detail-box">
                  <h5>{product.DescriptionOffre}</h5>

                  <h5> <span className='green'>{product.PrixResultatOffre}DT</span> </h5>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="btn-box">
    <a href='/Offres'>
      View All products
    </a>
  </div>
  </section>

  {/* Modal */}
  <Modal show={showModal} onHide={closeModal} centered>
<Modal.Header closeButton>
<Modal.Title>Image Preview</Modal.Title>
</Modal.Header>
<Modal.Body>

{selectedImage && (
   <img
   src={require(`../../img/${selectedImage}_1.png`)}
   alt="Selected"
   className="modal-image"
   onError={(e) => {
     e.target.src = b1;
   }}
 />
  )}

    <div className="modal-button-container">
  {/* Add your "Acheter" button here */}
  <button className="acheter-button" onClick={() => handleAcheterClick(selectedProduct)}>Acheter</button>
  <hr/>
  {/* <button className="acheter-button"  onClick={() => navigate(`/product/${selectedProduct.OffersNo}`)}>View More</button> */}

</div>
</Modal.Body>
</Modal></div>
  )}
  
  </div>
  )
}

export default HommeCoffret