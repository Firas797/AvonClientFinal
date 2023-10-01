import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import productsData from '../redux/Products/Products';
import Modal from 'react-bootstrap/Modal';
import { addToCart } from '../redux/Cart/cartSlice';
import { AiFillEye } from 'react-icons/ai';

function Products() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const openModal = (image) => {
    const product = productsData.find((item) => item.OffersNo === image);
    setSelectedImage(image);
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAcheterClick = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    // Ensure that the currentPage is valid when the number of products changes
    const maxPage = Math.ceil(productsData.length / productsPerPage);
    if (currentPage > maxPage) {
      setCurrentPage(maxPage);
    }
  }, [productsData, currentPage]);

  // Slice the products array based on the current page and products per page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const displayedProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const prevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Offres</span>
            </h2>
            <p>Page {currentPage}</p> {/* Display current page number */}
            <div className="row">
              {displayedProducts.map((product) => (
                <div key={product.OffersNo} className="col-sm-6 col-md-4 col-lg-4">
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
                        src={require(`../Componenets/BAImages/${product.OffersNo}.png`)}
                        alt={product.DescriptionOffre}
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
          >
            Préc
          </button>
          <button
            disabled={displayedProducts.length < productsPerPage}
            onClick={nextPage}
          >
          Suiv
          </button>
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
              src={require(`../Componenets/BAImages/${selectedImage}.png`)}
              alt="Selected"
              className="modal-image"
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
            <button
              className="acheter-button"
              onClick={() => navigate(`/product/${selectedProduct.OffersNo}`)}
            >
              View More
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Products;
