import {Route, Routes} from 'react-router-dom';
import {HomePage, RestaurantMenuPage, RestaurantPage} from '../pages';

export const AppRouter = () => (
    <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/:id'} element={<RestaurantPage/>}/>
        <Route path={'/:id/menu'} element={<RestaurantMenuPage/>}/>
    </Routes>
);