import {Button} from '../ui/button.tsx';
import {useDispatch} from 'react-redux';
import {updateItemQuantity} from '../../store/cart/slice.ts';

const CartItem = ({item}) => {

    const dispatch = useDispatch();
    const handleAddQuantity = () => {
        dispatch(updateItemQuantity({
            id: item.id,
            quantity: item.quantity + 1
        }));
    };

    const handleRemoveQuantity = () => {
        dispatch(updateItemQuantity({
            id: item.id,
            quantity: item.quantity - 1
        }));
    };
    return (
        <div className={'flex justify-start gap-1'}>
            <img
                alt={item.name}
                src={item.image}
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