import type {AppDispatch, RooState} from '@/store';
import type {TypedUseSelectorHook} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';


export const useAppSelector: TypedUseSelectorHook<RooState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;