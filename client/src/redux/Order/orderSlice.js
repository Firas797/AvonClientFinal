import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Async thunk for creating an order
export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (orderData, thunkAPI) => {
    try {
      await axios.post('http://51.178.169.197:5000/api/orders/create-order', orderData);
      toast.success('Order created successfully!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return orderData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Async thunk for fetching orders
export const fetchOrders = createAsyncThunk('order/fetchOrders', async () => {
  try {
    const response = await axios.get('http://51.178.169.197:5000/api/orders/get-orders'); // Change the API endpoint accordingly
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while fetching orders.');
  }
});

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.loading = false;
        toast.info('Votre commande est succés on va vous appeler plutot', {
          position: 'bottom-left',
        });
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
