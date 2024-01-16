import qs from 'qs';

export function queryString(value?: object) {
  return qs.stringify(value, { skipNulls: true, addQueryPrefix: true });
}

export function formatCurrency(amount: number, currency?: boolean) {
  if (amount === undefined) return '-';
  return `${new Intl.NumberFormat().format(amount)} ${currency ? 'MMK' : ''}`;
}
