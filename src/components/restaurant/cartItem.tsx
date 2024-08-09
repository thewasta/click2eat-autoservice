import {Button} from '@/components/ui/button.tsx';
import {ProductReduxState, updateItemQuantity} from '@/store/cart/slice.ts';
import {useAppDispatch} from "@/lib/hooks/useStore.tsx";

const CartItem = ({item}: { item: ProductReduxState }) => {

    const dispatch = useAppDispatch();
    const handleAddQuantity = () => {
        dispatch(updateItemQuantity({
            id: item.id,
            quantity: item.quantity + 1,
            price: item.price
        }));
    };

    const handleRemoveQuantity = () => {
        dispatch(updateItemQuantity({
            id: item.id,
            quantity: item.quantity - 1,
            price: item.price
        }));
    };
    return (
        <div className={'flex justify-start gap-1'}>
            <img
                alt={item.name}
                src={item.image}
                className={'w-[100px]'}
            />
            <div className={'flex flex-col justify-center items-center w-full'}>
                <h3 className={'font-light text-sm text-left'}>
                    {item.name}
                </h3>
                <p>
                    €{Math.round(((item.price * item.quantity) + Number.EPSILON) * 100) / 100}
                </p>
                <div className={'flex items-center gap-3'}>
                    <Button
                        className={'rounded-full'}
                        variant={'outline'}
                        size={'icon'}
                        onClick={handleRemoveQuantity}
                    >
                        -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                        className={'rounded-full'}
                        variant={'outline'}
                        size={'icon'}
                        onClick={handleAddQuantity}
                    >
                        +
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;