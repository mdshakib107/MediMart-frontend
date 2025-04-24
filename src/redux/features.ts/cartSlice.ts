import { TMedicine } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface CartProduct extends TMedicine {
    orderQuantity: number
}

interface InitialState {
    medicines: CartProduct[]
    city: string;
    shippingAddress: string;

}

// helper function to load cart from local storage

const loadCartFromLocalStorage = (): InitialState => {
    if (typeof window === 'undefined') {
        return {
            medicines: [],
            city: '',
            shippingAddress: ''
        }
    }
    try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            return JSON.parse(storedCart)
        }
    } catch (error) {
        console.log('Failed to load cart from localStorage:', error)
    }
    return {
        medicines: [],
        city: '',
        shippingAddress: ''
    }
}

const saveCartToLocalStorage = (cart: InitialState)=> {
    if (typeof window === "undefined") {
        return
    }
    try {
        localStorage.setItem('cart', JSON.stringify(cart))
    } catch (error) {
        console.error('Failed to save cart to localStorage:', error);
    }
}

const initialState: InitialState = loadCartFromLocalStorage()

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log('clicked',{state, action});
            // if (state.medicines.length === 0) {
            //     state.medicines.
            // }
        }
    }
})

export const {addProduct} = cartSlice.actions;

export default cartSlice.reducer 