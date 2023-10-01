import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  isLoggedIn : false,
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const response = await axios.post('http://51.178.169.197:5000/api/users/login', credentials);
    const { userCode,  accessToken, refreshToken } = response.data;
    localStorage.setItem('user', JSON.stringify({ userCode }));
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    return { userCode, accessToken, refreshToken };
  } catch (error) {
    throw error.response.data.message;
  }
});

export const refreshAccessToken = createAsyncThunk(
  'auth/refreshAccessToken',
  async (refreshToken, { dispatch }) => {
    try {
      const response = await axios.post('http://51.178.169.197:5000/api/users/refreshToken', { refreshToken });
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);

      // Dispatch the action to update the accessToken in the state
      dispatch(setAccessToken(accessToken));

      return accessToken;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

// Action to set the access token in the state
export const setAccessToken = (accessToken) => {
  return { type: 'auth/setAccessToken', payload: accessToken };
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoading = false;
      state.isLoggedIn=false;
      state.error = null;
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      toast.success('Goodbye, you have been logged out!');
    },
    clearError: (state) => {
      state.error = null;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.userCode;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn=true
        toast.success('Hello, welcome to Call center dashboard!');
  
        // Use the navigate function to redirect the user to /dashboardAdmin
       
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : 'Sorry, your information is incorrect!';
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
export const selectIsLoggedIn = (state) => state.auth.accessToken !== null;
