import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';

i18n
	.use(initReactI18next) // Configura react-i18next
	.init({
		resources: {
			en: { translation: en },
			es: { translation: es },
		},
		lng: 'en', // Idioma por defecto
		fallbackLng: 'en', // Idioma en caso de que no se encuentre la traducción
		interpolation: {
			escapeValue: false, // React ya maneja el escape de valores
		},
	});

export default i18n;
