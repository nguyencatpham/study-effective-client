import {defaultLanguage} from '../../config/config'
/* ------------------------
   FORMAT CURRENCY
--------------------------*/
export const formatCurrency = (number, language = defaultLanguage) => {
  if (number === undefined || number === null) {
    return 0
  }
  switch (language) {
    case 'vi':
      return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ₫`
    case 'en':
      return `$ ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
    default:
      return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ₫`
  }
}

