import { Box, Text } from '@mantine/core';

export function DetailItem({
  label,
  value,
  children,
}: {
  label: string;
  value?: string | number;
  children?: React.ReactElement;
}) {
  return (
    <Box>
      <Text fw={600}>{label}</Text>
      {children || <Text fz={16}>{value || '-'}</Text>}
    </Box>
  );
}
