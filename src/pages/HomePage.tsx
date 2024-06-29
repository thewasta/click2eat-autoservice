import {Button} from '@/components/ui/button.tsx';
import {useTranslation} from 'react-i18next';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu.tsx';
import World from '@/components/icons/World.tsx';
import {Link} from "react-router-dom";

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
            <section className={'flex flex-col p-6 items-center justify-center mt-4'}>
                <h1 className={'font-bold text-center text-2xl tracking-widest'}>
                    Click<span className={'text-primary'}>2Eat</span>
                </h1>
                <p>
                    {t('home.error.restaurant')}
                </p>
                <Button className={'w-fit'} asChild>
                    <Link to={'/example-restaurant'}>
                        {t('home.button.go_restaurant')}
                    </Link>
                </Button>
            </section>
        </>
    );
};

export default HomePage;