import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Button} from '@/components/ui/button.tsx';
import {addToCart} from '@/store/cart/slice.ts';
import {useTranslation} from "react-i18next";
import {Product} from "@/lib/mock/product.ts";
import {useAppDispatch} from "@/lib/hooks/useStore.tsx";
import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";
import {ShoppingCartPlus} from "@/components/icons/ShoppingCartPlus.tsx";

const ProductCart = ({product}: { product: Product }) => {
    const {image, id, name, price} = product;
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const handleAddCart = () => {
        dispatch(addToCart({
            id,
            quantity: 1,
            name,
            image,
            price
        }));
    };
    return (
        <Card>
            <CardContent className={'p-2'}>
                <div className={'flex flex-col items-center'}>
                    <LazyLoadImage src={image}
                                   className={'size-fit rounded-md justify-items-center w-full'}/>
                    <h4 className='self-start font-light capitalize truncate w-3/4 text-center'>
                        {name}
                    </h4>
                    <span>{price} €</span>
                </div>
            </CardContent>
            <CardFooter className={'justify-center'}>
                <Button onClick={handleAddCart}>
                    <ShoppingCartPlus/> {t('product.add')}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCart;