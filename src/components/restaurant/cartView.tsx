import {SheetContent, SheetHeader, SheetTitle} from '../ui/sheet.tsx';
import {useAppSelector} from '../../lib/hooks/useStore.tsx';
import CartItem from './cartItem.tsx';
import {Button} from '../ui/button.tsx';
import {ScrollArea} from "../ui/scroll-area.tsx";

const CartView = () => {
    const cart = useAppSelector(state => state.cart);

    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle>
                    Mi pedido
                </SheetTitle>
            </SheetHeader>
            <div className={'h-full grid grid-rows-[1fr_60px]'}>
                <ScrollArea className={'mb-7'}>
                    <div className={'flex flex-col gap-4'}>
                        {
                            cart.items.map((item, index) => (
                                <CartItem key={index} item={item}/>
                            ))
                        }
                    </div>
                </ScrollArea>
                <div className={'flex justify-between'}>
                    <Button>
                        Necesito ayuda
                    </Button>
                    <Button>
                        Enviar pedido
                    </Button>
                </div>
            </div>
        </SheetContent>
    );
};

export default CartView;