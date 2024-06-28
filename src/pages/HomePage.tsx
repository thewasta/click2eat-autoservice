import {Button} from '../components/ui/button.tsx';
import {useTranslation} from 'react-i18next';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '../components/ui/dropdown-menu.tsx';
import World from '../components/icons/World.tsx';

const HomePage = () => {
    const {t, i18n: {changeLanguage}} = useTranslation();

    const switchLanguage = (lang: string) => {
        changeLanguage(lang);
        localStorage.setItem('i18nLanguage', lang);
    };
    return (
        <>
            <header className={'flex justify-end px-2 py-3 shadow-sm'}>
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
            </header>
            <section className={'flex justify-center mt-4'}>
                <h1 className={'font-bold text-black tracking-widest'}>
                    Click2Eat
                </h1>
                <p>
                    {t('home.error.restaurant')}
                </p>
            </section>
        </>
    );
};

export default HomePage;