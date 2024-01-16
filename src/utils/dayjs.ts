import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

type DateType = string | number | Date | dayjs.Dayjs | null | undefined;

export const DISPLAY_DATE_FORMAT = 'D MMM, YYYY';
export const DISPLAY_DATE_TIME_FORMAT = `${DISPLAY_DATE_FORMAT} h:mm A`;

export function displayDate(date: DateType, dateFormat?: string) {
  return dayjs(date).format(dateFormat || DISPLAY_DATE_FORMAT);
}

export function displayDateTime(date: DateType, dateFormat?: string) {
  return dayjs(date).format(dateFormat || DISPLAY_DATE_TIME_FORMAT);
}

export function formatServerDate(date?: DateType) {
  return dayjs(date).format('YYYY-MM-DD');
}

export function formatAgo(date?: DateType) {
  return dayjs(date).fromNow();
}
