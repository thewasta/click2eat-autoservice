import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ProductCart {
    id: number;
    quantity: number;
}

interface SliceInitialState {
    items: ProductCart[]
}

const localStorageKeyName = '__click2eat___cart__items';
const initialState: SliceInitialState = {
    items: localStorage.getItem(localStorageKeyName) ? JSON.parse(localStorage.getItem(localStorageKeyName)) : []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{
            id: number,
            quantity: number,
            name: string,
            image: string,
            price: number
        }>) => {
            const {id, quantity} = action.payload;
            const productIndex = state.items.findIndex(item => item.id === id);
            if (productIndex >= 0) {
                state.items[productIndex].quantity += quantity;
            } else {
                state.items.push({...action.payload});
            }

            localStorage.setItem(localStorageKeyName, JSON.stringify(state.items));
        },
        updateItemQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            const {id, quantity} = action.payload;
            const indexItem = state.items.findIndex(item => item.id === id);
            if (indexItem >= 0 && quantity > 0) {
                state.items[indexItem].quantity = quantity;
            } else {
                state.items = state.items.filter(item => item.id !== id);
            }
        }
    }
});

export const {
    addToCart,
    updateItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer;