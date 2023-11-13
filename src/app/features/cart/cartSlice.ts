import { RootState } from './../../store';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface";
import { addItemToShoppingCart } from "../../../utils/functions";

interface CounterState {
  cartItems: IProduct[];
}

// const [counter, setCounter] = useState(0)
const initialState: CounterState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart", // ** Attached with Store
  initialState,
  reducers: {
    addItemToCartAction: (state, action: PayloadAction<IProduct>) => {
      state.cartItems = addItemToShoppingCart(state.cartItems, action.payload);
    },
  },
});

export const { addItemToCartAction } = cartSlice.actions;
export const CartSelector=({cart}:RootState)=>cart
export default cartSlice.reducer;
