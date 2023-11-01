import { createSlice } from "@reduxjs/toolkit";
import productData from '../productData'



const initialState = {
    cart: [],
    items: productData,
    totalQuantity: 0,
    totalPrice: 0,  
    selectedCategory: null,
    activeButton: null,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item => item.id === action.payload.id))
            if (find >= 0) {
                    if (state.cart[find].quantity < 8) {
                        state.cart[find].quantity += 1
                    }else{
                        alert('You can buy only up to 8 unit(s) of this product')
                     
                        
                    }

            } else {
                state.cart.push(action.payload)
            }
        },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                }, {
                totalQuantity: 0,
                totalPrice: 0
            });
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalQuantity = totalQuantity
        },
        removeCartItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },

        increaseItemQuantity: (state, action) => {

            state.cart = state.cart.map((item) => {
                
                    if (item.id === action.payload.id) {
                        if (item.quantity < 8) {
                        return { ...item, quantity: item.quantity + 1 }
                    }else {
                        alert('You can buy only up to 8 unit(s) of this product')
                    }
                }
                
                return item

            })
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.quantity > 1) {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity - 1 }
                }
            }
               return item
            })
        },

        setCategory : (state, action) => {
            state.selectedCategory = action.payload;
           
        },
        setActiveButton: (state, action) => {
            state.activeButton = action.payload;
          },

    }
})

export const { addToCart, getCartTotal, removeCartItem, increaseItemQuantity, decreaseItemQuantity , setCategory, setActiveButton } = cartSlice.actions;

export default cartSlice.reducer

