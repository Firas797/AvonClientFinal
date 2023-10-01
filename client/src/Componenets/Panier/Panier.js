import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from ".././../redux/Cart/cartSlice";
import './Panier.css'
import { createOrder,createOrderSuccess  } from '../../redux/Order/orderSlice'; // Import the createOrder action
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import b1 from '../Products/img/0108200_1.png'

function Panier() {
  const cart = useSelector((state)=>state.cart)
const order = useSelector((state)=>state.loading)
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector(state => state.cart.cartTotalAmount);
  const [userInformationComplete, setUserInformationComplete] = useState(false);

  const cartItems = useSelector(state => state.cart.cartItems);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [showModal, setShowModal] = useState(false); // State for showing the modal
  const [initiatePayment, setInitiatePayment] = useState(false);

  const handleProceedToPay = async () => {
    const orderData = {
      cartItems: cartItems.map(item => ({
        
        OffersNo: item.NoArticleFacturation || item.OffersNo,
        DescriptionOffre: item.DescriptionOffre,
        cartQuantity: item.cartQuantity,
        // Add other fields from your cart item model if needed
      })),
      userInformation: {
        fullName,
        address,
        phoneNumber,
        location,
      },
      totalAmount: cartTotalAmount,
      // Add any other fields as needed
    };
    dispatch(createOrder(orderData))
  };
  useEffect(() => {
    if (fullName && address && phoneNumber && location) {
      setUserInformationComplete(true);
    } else {
      setUserInformationComplete(false);
    }
  }, [fullName, address, phoneNumber, location]);
  
  useEffect(() => {
    if (initiatePayment) {
      handleProceedToPay();
      setShowModal(true); // Open the modal
      setInitiatePayment(false); // Reset the state
    }
  }, [initiatePayment]);


  return (
<section className="h-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Panier</h3>
          <div>
            <p className="mb-0"><span className="text-muted">Retourne au</span> <a href="/" className="text-body">ACCUEIL <i className="fas fa-angle-down mt-1" /></a></p>
          </div>
        </div>



        {cartItems.map(item => (
        <div className="card rounded-3 mb-4" key={item.OffersNo}>
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
             
              <div className="col-md-2 col-lg-2 col-xl-2">
  <img
   src={
    (() => {
      try {
        return require(`../BAImages/${item.OffersNo}.png`);
      } catch (error) {
        // If the image is not found in the original source folder, try the alternative folder
        try {
          return require(`../Products/img/${item.OffersNo}_1.png`);
        } catch (error) {
          // If the image is not found in either folder, use a default image or show an error message
          return "path/to/default/image.png"; // Replace with your default image path
        }
      }
    })()
  }
  className="img-fluid rounded-3"
  alt={item.DescriptionOffre}
  />
  
  
</div>


              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">{item.DescriptionOffre}</p>  {/* Use the item name */}
                <p>
                  <span className="text-muted">OffersNo: </span>{item.NoArticleFacturation}  {/* Use the OffersNo */}
                  <br/>
                  <span className="text-muted">Prix: </span>{item.PrixResultatOffre}  {/* Use the OffersNo */}
                  <br/>

                  <span className="text-muted">PrixRegulier : </span>{item.PrixRegulier} DT    {/* Use the PrixResultatOffre */}
                </p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
         
<input type="button"  onClick={() => handleDecreaseCart(item)} value="-" class="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity"/>
          <span>{item.cartQuantity}</span>
         
<input type="button"   onClick={() => handleAddToCart(item)} value="+" class="button-plus border rounded-circle icon-shape icon-sm lh-0" data-field="quantity"/>
          </div>

              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0 ">{item.PrixResultatOffre * item.cartQuantity}DT <DeleteOutlineIcon className='ml-4' onClick={() => handleRemoveFromCart(item)} /></h5>  {/* Use the price */}
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger">
                  <i className="fas fa-trash fa-lg" />
                </a>
              </div>
      
            </div>
          </div>
        </div>
        
      ))}
     
     <div className="card mb-4">
      <div className="card-body p-4">
      <h5 className="mb-0"> Total commandes : <span className='green'> {cartTotalAmount}DT </span></h5>

      </div>
</div>
       
<div className="card mb-4">
  <div className="card-body p-4">
    <h3 className="fw-normal mb-3">Informations sur l’utilisateur</h3>
    <div className="mb-3">
      <label htmlFor="fullName" className="form-label">Nom & Prénom</label>
      <input
        type="text"
        id="fullName"
        className="form-control"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="address" className="form-label">Address</label>
      <input
        type="text"
        id="address"
        className="form-control"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="phoneNumber" className="form-label">Numéro de téléphone</label>
      <input
        type="text"
        id="phoneNumber"
        className="form-control"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="location" className="form-label">localisation</label>
      <input
        type="text"
        id="location"
        className="form-control"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  </div>
</div>

<div className="card mb-4">
  <div className="card-body p-4 d-flex flex-row">
    <div className="form-outline flex-fill">
      <input
        type="text"
        id="discountCode"
        className="form-control form-control-lg"
      />
      <label className="form-label" htmlFor="discountCode">vous pouvez laisser un commentaire</label>
    </div>
  </div>
</div>
<div className="card">
  <div className="card-body" >
  
  <button
  type="button"
  className="btn btn-warning btn-block btn-lg"
  onClick={() => {
    if (cartItems.length > 0 && cartTotalAmount > 0) {
      setInitiatePayment(true);
    }
  }}
  disabled={!userInformationComplete || order || cartItems.length === 0 || cartTotalAmount === 0}
>
  Valider
</button>
   
  </div>
</div>,

<Modal show={showModal} onHide={() => setShowModal(false)} centered>
  <Modal.Header closeButton>
    <Modal.Title>Congratulation</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>we will call you soon pls be prepared </p>
  </Modal.Body>
  <Modal.Footer>
  
    <Button
    href='/'
      variant="primary"
      onClick={() => { handleClearCart()
        setInitiatePayment(false); // Reset the state
        setShowModal(false); // Close the modal
      }}
      disabled={!userInformationComplete || order}
    >
      Confirm 
    </Button>
  </Modal.Footer>
</Modal>
   
      </div>
    </div>
  </div>
  
</section>




  )
}

export default Panier