import { createNamespace } from '../utils';
import { padZero } from '../utils/format/string';

const [createComponent, bem, t] = createNamespace('calendar');

export { createComponent, bem, t };

export function formatMonthTitle(date: Date) {
  return t('monthTitle', date.getFullYear(), padZero(date.getMonth() + 1));
}

export function compareMonth(date1: Date, date2: Date) {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  const month1 = date1.getMonth();
  const month2 = date2.getMonth();

  if (year1 === year2) {
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
}
