import {SheetContent, SheetHeader, SheetTitle} from '@/components/ui/sheet.tsx';
import {useAppSelector} from '@/lib/hooks/useStore.tsx';
import CartItem from './cartItem.tsx';
import {Button} from '@/components/ui/button.tsx';
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {useTranslation} from "react-i18next";
import {toast} from "sonner";

const SideSheetView = () => {
    const cart = useAppSelector(state => state.cart);
    const {t} = useTranslation();
    return (
        <SheetContent className={'px-2'}>
            <SheetHeader>
                <SheetTitle>
                    {t('cart.title')}
                </SheetTitle>
            </SheetHeader>
            <div className={'h-full grid grid-rows-[1fr_60px]'}>
                <ScrollArea className={'w-full mb-7'}>
                    <div className={'flex flex-col gap-4'}>
                        {
                            cart.items.map((item: any, index) => (
                                <CartItem key={index} item={item}/>
                            ))
                        }
                    </div>
                </ScrollArea>
                <div className={'flex justify-between'}>
                    <Button onClick={() => {
                        toast(t('button.home.request.success.tittle'), {
                            description: t('button.home.requests.success.description'),
                        });
                    }}>
                        {t('button.home.request')}
                    </Button>
                    <Button>
                        {t('cart.send_order')}
                    </Button>
                </div>
            </div>
        </SheetContent>
    );
};

export default SideSheetView;