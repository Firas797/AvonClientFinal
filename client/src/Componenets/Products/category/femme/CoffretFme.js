
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CoffretFemme from './JsonFemme/CoffretFemme';
import Modal from 'react-bootstrap/Modal';
import { addToCart } from '../../../../redux/Cart/cartSlice';
import b1 from '../../img/0108200_1.png';

function CoffretFme() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductPath, setSelectedProductPath] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const openModal = (image) => {
    const product = CoffretFemme.find(item => item.OffersNo === image);
    setSelectedImage(image);
    setSelectedProduct(product);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  // Filter out products without an image
  const displayedProducts = CoffretFemme.filter(product => {
    try {
      require(`../../img/${product.OffersNo}_1.png`);
      return true;
    } catch (err) {
      return false;
    }
  });

  // Calculate the index of the last product to display
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calculate the index of the first product to display
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Get the current page of products
  const currentProducts = displayedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  const handleAcheterClick = (item) => {
    dispatch(addToCart(item));
    setSelectedProductPath(`/product/${item.OffersNo}`);
  };

 

  return (
    <div>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
             <span>COFFRET FEMME</span>
            </h2>
            <div className="row">
              {currentProducts.map(product => (
                <div key={product.OffersNo} className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                    <div className="option_container">
                      <button className="acheter-button" onClick={() => openModal(product.OffersNo)}> Voir</button>
                    </div>
                    <div className="img-box">
                      <img
                        src={require(`../../img/${product.OffersNo}_1.png`)}
                        alt="Selected"
                        className="modal-image"
                        loading="lazy" // Add this line to enable lazy loading

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
   
      </section>
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
            <button className="acheter-button" onClick={() => handleAcheterClick(selectedProduct)}>Acheter</button>
            <hr />
            {/* <button className="acheter-button" onClick={() => navigate(`/product/${selectedProduct.OffersNo}`)}>View More</button> */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CoffretFme;