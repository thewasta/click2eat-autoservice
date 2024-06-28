import {Link, useParams} from 'react-router-dom';
import {Button} from '../components/ui/button.tsx';
import {toast} from 'sonner';
import {useTranslation} from 'react-i18next';

const RestaurantPage = () => {
    const {id} = useParams();

    const {t} = useTranslation();

    return (
        <>
            <main className={'flex justify-center items-center h-screen'}>
                <img
                    alt={'company main image'}
                    src={'https://placehold.co/600x600'}
                    className={'absolute z-[-10] h-screen object-cover'}
                />
                <section className={'flex flex-col items-center'}>
                    <h3 className={'text-2xl font-bold'}>
                        [NOMBRE EMPRESA]
                    </h3>
                    <div className={'flex gap-2 justify-center'}>
                        <Button asChild>
                            <Link to={`/${id}/menu`}>
                                {t('button.home.order')}
                            </Link>
                        </Button>
                        <Button
                            onClick={() => {
                                toast(t('button.home.request.success.tittle'), {
                                    description: t('button.home.requests.success.description'),
                                });
                            }}>
                            {t('button.home.request')}
                        </Button>
                    </div>
                </section>
                <section className={'absolute bottom-2 text-xs'}>
                    Copyright Click2Eat
                </section>
            </main>
        </>
    );
};

export default RestaurantPage;