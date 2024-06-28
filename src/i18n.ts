import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enJSON from './lib/i18n/en.json';
import esJSON from './lib/i18n/es.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            ...enJSON,
        },
        es: {
            ...esJSON
        }
    },
    lng: 'es',
});