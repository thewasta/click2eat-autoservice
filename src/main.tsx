import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import './i18n.ts';
import {Toaster} from './components/ui/sonner.tsx';
import {Provider} from 'react-redux';
import {store} from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
        <Toaster/>
    </BrowserRouter>
);
