import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../../assets/translations/en.json'
import fr from '../../assets/translations/fr.json'

const defaultLang = 'en'
const fallbackLang = 'en'

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			en,
			fr,
		},
		lng: defaultLang,
		fallbackLng: fallbackLang,
		interpolation: {
			escapeValue: false,
		},
	})
	// eslint-disable-next-line no-console
	.then(() => console.log('i18n initialised'))
	.catch((e) => console.error('Error in i18n initialisation', e))

export default i18n
