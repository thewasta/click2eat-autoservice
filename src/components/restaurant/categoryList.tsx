import {Button} from '@/components/ui/button.tsx';
import {ScrollArea, ScrollBar} from '@/components/ui/scroll-area.tsx';

const CategoryList = ({categories, selectedCategory, setSelectedCategory}: {
    categories: string[] | undefined,
    selectedCategory: string | null | undefined, setSelectedCategory: (state: string | null) => void
}) => {
    const handleSelectCategory = (category: string | null) => {
        setSelectedCategory(category);
    };
    return (
        <ScrollArea className={'w-screen p-2'}>
            <section className={'flex items-center gap-2 my-3 sticky'}>
                {
                    categories?.map((category, index: number) => (
                        selectedCategory === category ?
                            <Button
                                className={'bg-primary'}
                                onClick={() => handleSelectCategory(null)}
                                key={index}
                                variant={'outline'}>
                                {category}
                            </Button>
                            :
                            <Button
                                onClick={() => handleSelectCategory(category)}
                                key={index}
                                variant={'outline'}>
                                {category}
                            </Button>
                    ))
                }
            </section>
            <ScrollBar orientation={'horizontal'}/>
        </ScrollArea>);
};

export default CategoryList;