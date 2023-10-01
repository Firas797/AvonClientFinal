import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../redux/Order/orderSlice';
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

import {logout} from '../../redux/Login/authSlice'
// Define custom CSS classes for the modal
const customModalStyles = {
  modalContent: {
    backgroundColor: 'black',
    color: 'white',
  },
  modalHeader: {
    backgroundColor: 'black',
    color: 'white',
  },
  modalFooter: {
    backgroundColor: 'black',
    color: 'white',
  },
};

function Admin() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const loading = useSelector((state) => state.order.loading);
  const isLoggedIn= useSelector((state) => state.order.isLoggedIn);

  // State to track which modal is open
  const [openModalOrderId, setOpenModalOrderId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const toggleModal = (orderId) => {
    setOpenModalOrderId(orderId === openModalOrderId ? null : orderId);
  };
  const handleLogout = () => {
    dispatch(logout())
    navigate('/admin');

  };

  return (
   
  
    <div>
      <h2>Orders</h2>
      {isLoggedIn ? (
        <p>Loading orders...</p>
      ) : (
        <MDBTable className="text mb-0">
          <MDBTableHead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Name Client</th>
              <th scope="col">Address</th>
              <th scope="col"></th>
              <th scope="col">Location</th>
              <th scope="col">Done</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Phone</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {orders.map((order) => (
              <tr key={order._id}>
                <th>{order._id}</th>
                <td>{order.userInformation.fullName}</td>
                <td>{order.userInformation.address}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => toggleModal(order._id)}
                  >
                    View Cart
                  </button>
                </td>
                <td>{order.userInformation.location}</td>
                <td>{order.isPaid ? 'Yes' : 'No'}</td>
                <td>{order.totalAmount} DT</td>
                <td>{order.userInformation.phoneNumber}</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      )}
 <div>
     <button onClick={handleLogout}>Logout</button>
    </div>
      {/* Modal */}
      {openModalOrderId && (
  <MDBModal
    show={true}
    onHide={() => toggleModal(null)}
    contentClassName="custom-modal-content" // Apply custom styles
    modalStyle={customModalStyles.modalContent}
  >
    <MDBModalHeader style={customModalStyles.modalHeader}>
      Cart Items
    </MDBModalHeader>
    <MDBModalBody style={customModalStyles.modalContent}>
      <table>
        <thead>
          <tr>
            <th>Offer Number</th>
            <th>Description</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .find((order) => order._id === openModalOrderId)
            .cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.OffersNo}</td>
                <td>{item.DescriptionOffre}</td>
                <td>{item.cartQuantity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </MDBModalBody>
    <MDBModalFooter style={customModalStyles.modalFooter}>
      <MDBBtn color="secondary" onClick={() => toggleModal(null)}>
        Close
      </MDBBtn>
    </MDBModalFooter>
  </MDBModal>
)}


    </div>
  );
}

export default Admin;



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchOrders } from '../../redux/Order/orderSlice'; // Update the import path accordingly

// function Admin() {
//   const dispatch = useDispatch();
//   const orders = useSelector((state) => state.order.orders);
//   const loading = useSelector((state) => state.order.loading);

//   useEffect(() => {
//     dispatch(fetchOrders());
//   }, [dispatch]);

//   return (
//     <div>
//       <h2>Orders</h2>
//       {loading ? (
//         <p>Loading orders...</p>
//       ) : (
//         <ul>
//           {orders.map((order) => (
//             <li key={order._id}>
//               <h3>Order ID: {order._id}</h3>
//               <p>Full Name: {order.userInformation.fullName}</p>
//               <p>Address: {order.userInformation.address}</p>
//               <p>Phone Number: {order.userInformation.phoneNumber}</p>
//               <p>Location: {order.userInformation.location}</p>
//               <p>Total Amount: {order.totalAmount}</p>
//               <h4>Cart Items:</h4>
//               <ul>
//                 {order.cartItems.map((item) => (
//                   <li key={item._id}>
//                     <p>Offer Number: {item.OffersNo}</p>
//                     <p>Description: {item.DescriptionOffre}</p>
//                     <p>Quantity: {item.cartQuantity}</p>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Admin;



