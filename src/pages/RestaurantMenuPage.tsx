import {products} from '../lib/mock/product.ts';
import {ScrollArea} from '../components/ui/scroll-area.tsx';
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from '../components/ui/carousel.tsx';
import {Card, CardContent} from '../components/ui/card.tsx';
import CategoryList from '../components/restaurant/categoryList.tsx';
import {useEffect, useState} from 'react';
import ProductCart from '../components/restaurant/productCart.tsx';
import RestaurantHeader from '../components/restaurant/restaurantHeader.tsx';
import {Sheet} from '../components/ui/sheet.tsx';
import CartView from '../components/restaurant/cartView.tsx';
import Autoplay from "embla-carousel-autoplay";
const RestaurantMenuPage = () => {
    const [categories, setCategories] = useState<string[]>();
    const [api, setApi] = useState<CarouselApi>();

    const [selectedCategory, setSelectedCategory] = useState<string | null>();
    const getFilteredProducts = () => {
        if (!selectedCategory) return products;
        return products.filter(product => product.category === selectedCategory);
    };

    useEffect(() => {
        setCategories([...new Set(products
            .map(product => product.category)
            .filter(category => category && category.toLowerCase() !== 'n/a'))]);

    }, []);

    return (
        <Sheet>
            <RestaurantHeader/>
            <ScrollArea className={'h-screen w-full rounded-md border'}>
                <div className={'flex justify-center my-3'}>
                    <Carousel plugins={[Autoplay()]} setApi={setApi} opts={{
                        loop: true,
                    }} className="w-full max-w-xs">
                        <CarouselContent>
                            {Array.from({length: 5}).map((_, index) => (
                                <CarouselItem key={index} className={'basis-full'}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-4xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <CategoryList categories={categories} selectedCategory={selectedCategory}
                              setSelectedCategory={setSelectedCategory}/>
                <main className={'grid gap-3 grid-cols-2 xs:grid-cols-3 mb-14 p-3'}>
                    {
                        getFilteredProducts().map((product, i) => (
                            <ProductCart product={product} key={i}/>
                        ))
                    }
                </main>
                <CartView/>
            </ScrollArea>
        </Sheet>
    );
};

export default RestaurantMenuPage;