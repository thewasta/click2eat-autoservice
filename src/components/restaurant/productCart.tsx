import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Button} from '../ui/button.tsx';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/cart/slice.ts';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "../ui/carousel.tsx";
import {Card, CardContent} from "../ui/card.tsx";

const ProductCart = ({product}) => {
    const {image, id, name,price} = product;
    const dispatch = useDispatch();
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
        <div className={'flex flex-col items-center text-ellipsis'}>
            <Carousel opts={{
                loop: true
            }}>
                <CarouselContent>
                    <CarouselItem>
                        <LazyLoadImage src={image}
                                       className={'size-fit rounded-md justify-items-center'}/>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            <h4 className='font-light capitalize'>
                {name}
            </h4>
            <div className={'flex items-center gap-2'}>
                <Button onClick={handleAddCart}>
                    Añadir
                </Button>
                <span>
                {price}€
            </span>
            </div>
        </div>
    );
};

export default ProductCart;