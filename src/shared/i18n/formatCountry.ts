import countries from 'i18n-iso-countries'
import countriesRu from 'i18n-iso-countries/langs/ru.json'
import { langRu } from 'shared/const'

countries.registerLocale(countriesRu)

export const formatCountry = (countryCode: string | number, currentLang = langRu) =>
  countries.getName(countryCode, currentLang)
