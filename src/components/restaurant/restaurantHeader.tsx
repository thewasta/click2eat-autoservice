import {Button} from '../ui/button.tsx';
import {ShoppingCart} from '../icons/ShoppingCart.tsx';
import {useAppSelector} from '../../lib/hooks/useStore.tsx';
import {useEffect, useState} from 'react';
import {SheetTrigger} from "../ui/sheet.tsx";

export default function RestaurantHeader() {
    const cart = useAppSelector(state => state.cart.items);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);

    useEffect(() => {
        let total = 0;
        cart.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [cart]);

    return (
        <header className={'flex justify-end py-2 px-3'}>
            <SheetTrigger asChild>
                <Button variant={'ghost'} className={'relative'}>
                    <ShoppingCart/>
                    <span
                        className={'absolute bg-primary text-white text-sm rounded-full w-5 h-5 left-2/3 flex justify-center items-center'}
                    >{totalQuantity}</span>
                </Button>
            </SheetTrigger>
        </header>
    );
}