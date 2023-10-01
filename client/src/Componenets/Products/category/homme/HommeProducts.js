import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Homme from '../homme/jsonHomme/Homme';
import Modal from 'react-bootstrap/Modal';
import { addToCart } from '../../../../redux/Cart/cartSlice';
import b1 from '../../img/0108200_1.png';
import LazyLoad from 'react-lazyload';
import Spinner from '../../../Spinner';
function HommeProducts() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const openModal = (image) => {
    const product = Homme.find((item) => item.OffersNo === image);
    setSelectedImage(image);
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const displayedProducts = Homme;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = displayedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleAcheterClick = (item) => {
    dispatch(addToCart(item));
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can change this to 'auto' for instant scrolling
    });
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can change this to 'auto' for instant scrolling
    });
  };

  useEffect(() => {
    const imagePromises = currentProducts.map((product) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = require(`../../img/${product.OffersNo}_1.png`);
        img.onload = () => resolve();
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoading(false);
    });
  }, [currentProducts]);

  const prevBtn = useRef(null);
  const nextBtn = useRef(null);

  const totalQte = useSelector((state) => state.cart.cartTotalQuantity);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <main>
        <Spinner/>
        </main>
      ) : (
        <section className="product_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                <span>FRAGRANCES</span>
              </h2>
              <p>page {currentPage} </p>
              <div className="row">
                {currentProducts.map((product) => (
                  <div
                    key={product.OffersNo}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <div className="box">
                      <div className="option_container">
                        <button
                          className="acheter-button"
                          onClick={() => openModal(product.OffersNo)}
                        >
                          Voir
                        </button>
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
            <button
              disabled={currentPage === 1}
              onClick={prevPage}
              ref={prevBtn}
            >
              Précédent
            </button>
            <button
              disabled={currentProducts.length < productsPerPage}
              onClick={nextPage}
              ref={nextBtn}
            >
              Suivant
            </button>
          </div>
        </section>
      )}
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
              loading="lazy"
              onError={(e) => {
                e.target.src = b1;
              }}
            />

          )}
          <div className="modal-button-container">
            
            <button
              className="acheter-button"
              onClick={() => handleAcheterClick(selectedProduct)}
            >
              Acheter
            </button>
            <hr />
          
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default HommeProducts;
