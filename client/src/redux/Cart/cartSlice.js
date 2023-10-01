import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.OffersNo === action.payload.OffersNo);

      if (existingItem) {
        existingItem.cartQuantity += 1;
        toast.info("Increased product quantity", { position: "bottom-left" });
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
        toast.success("Product added to cart", { position: "bottom-left" });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.cartTotalQuantity += 1;
    },
   
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.OffersNo === action.payload.OffersNo);

      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          toast.info("Decreased product quantity", { position: "bottom-left" });
        } else {
          toast.warning("Product quantity cannot be less than 1", { position: "bottom-left" });
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const { OffersNo } = action.payload;
      state.cartItems = state.cartItems.filter(item => item.OffersNo !== OffersNo);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.cartTotalQuantity--;
      toast.error("Product removed from cart", { position: "bottom-left" });
    },
    getTotals: (state) => {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { PrixResultatOffre, cartQuantity } = cartItem;
          const itemTotal = PrixResultatOffre * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmount = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
