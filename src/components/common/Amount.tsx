import { Text } from '@mantine/core';
import type { TextProps } from '@mantine/core';
import { formatCurrency } from '@utils/helper';

interface AmountProps {
  value: number;
}

export function Amount({ value, ...props }: AmountProps & TextProps) {
  return <Text {...props}>{formatCurrency(value)}</Text>;
}
