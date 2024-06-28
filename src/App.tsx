import {AppRouter} from './router/AppRouter.tsx';
import {useMediaQuery} from './lib/hooks/useMediaQuery.tsx';
import {useTranslation} from 'react-i18next';
import {useEffect} from 'react';

function App() {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const {t, i18n: {changeLanguage}} = useTranslation();
    const getUserLanguage = () => {
        const localStorageValue = localStorage.getItem('i18nLanguage');
        if (!localStorageValue) {
            changeLanguage('es');
            localStorage.setItem('i18nLanguage', 'es');
        } else {
            changeLanguage(localStorageValue);
        }
    };

    useEffect(() => {
        getUserLanguage();
    }, []);
    if (isDesktop) {
        return (
            <main className={'flex justify-center items-center h-screen bg-black'}>
                <h4 className={'text-white'}>
                    {t('mobileRequired')}
                </h4>
            </main>
        );
    }
    return (
        <AppRouter/>
    );
}

export default App;
