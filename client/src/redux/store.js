import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Login/authSlice';
import cardReducer, { getTotals } from './Cart/cartSlice'
import orderReducer from './Order/orderSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cardReducer,
order : orderReducer
  },
});
store.dispatch(getTotals());

export default store;
