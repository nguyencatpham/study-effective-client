import { defaultLanguage } from '../../config/config'

/* ------------------------
    FORMAT TO REEWOD DATE
--------------------------*/
export const formatReewodDate = (date, language = defaultLanguage, isFullYear = false) => {
  if (date === undefined || date === null || typeof date !== 'object') {
    return date
  }
  let monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  switch (language) {
    case 'vi':
      monthNames = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
      if (!isFullYear) {
        return `${date.getDate()} ${monthNames[date.getMonth()]} `
      }
      break
    default:
      break
  }
  if (isFullYear) {
    return ` ${monthNames[date.getMonth()]} ${date.getDate()},${date.getFullYear()}`
  }
  return ` ${monthNames[date.getMonth()]} ${date.getDate()}`
}
