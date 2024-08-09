import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ProductCart {
    id: number;
    quantity: number;
    price: number;
}

interface SliceInitialState {
    items: ProductCart[]
}

export type ProductReduxState = {
    id: number,
    quantity: number,
    name: string,
    image: string,
    price: number
}

const localStorageKeyName = '__click2eat___cart__items';

const initialState: SliceInitialState = (() => {
    const persisted = sessionStorage.getItem(localStorageKeyName);
    if (persisted && persisted !== '') {
        return {
            items: JSON.parse(persisted)
        }
    }
    return {
        items: []
    };
})();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductReduxState>) => {
            const {id, quantity} = action.payload;
            const productIndex = state.items.findIndex(item => item.id === id);
            if (productIndex >= 0) {
                state.items[productIndex].quantity += quantity;
            } else {
                state.items.push({...action.payload});
            }

            sessionStorage.setItem(localStorageKeyName, JSON.stringify(state.items));
        },
        updateItemQuantity: (state, action: PayloadAction<ProductCart>) => {
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