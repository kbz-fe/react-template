export function formatCurrency(amount: number, currency?: boolean) {
  if (amount === undefined) return '-';
  return `${new Intl.NumberFormat().format(amount)} ${currency ? 'MMK' : ''}`;
}
