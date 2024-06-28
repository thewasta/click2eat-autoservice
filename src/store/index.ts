import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cart/slice.ts';

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export type RooState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;