import {Button} from '@/components/ui/button.tsx';
import {ShoppingCart} from '@/components/icons/ShoppingCart.tsx';
import {useAppSelector} from '@/lib/hooks/useStore.tsx';
import {useEffect, useState} from 'react';
import {SheetTrigger} from "@/components/ui/sheet.tsx";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu.tsx";
import World from "@/components/icons/World.tsx";
import {useTranslation} from "react-i18next";
import {ArrowLeft} from "@/components/icons/ArrowLeft.tsx";
import {useNavigate} from "react-router-dom";

export default function RestaurantHeader() {

    const navigate = useNavigate();
    const cart = useAppSelector(state => state.cart.items);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const {t, i18n: {changeLanguage}} = useTranslation();

    useEffect(() => {
        let total = 0;
        cart.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [cart]);

    const switchLanguage = (lang: string) => {
        changeLanguage(lang);
    }

    return (
        <header className={'flex justify-between items-center py-2 px-3'}>
            <Button variant={'ghost'} className={'flex'}
            onClick={() => {
                navigate(-1);
            }}>
                <ArrowLeft/>
                <h4>
                    Menu
                </h4>
            </Button>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <World/>
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => switchLanguage('en')}>
                            {t('button.switch.lang.english')}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => switchLanguage('es')}>
                            {t('button.switch.lang.spanish')}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <SheetTrigger asChild>
                    <Button variant={'ghost'} className={'relative'}>
                        <ShoppingCart/>
                        <span
                            className={'absolute bg-primary text-white text-sm rounded-full w-5 h-5 left-2/3 flex justify-center items-center'}
                        >{totalQuantity}</span>
                    </Button>
                </SheetTrigger>
            </div>
        </header>
    );
}