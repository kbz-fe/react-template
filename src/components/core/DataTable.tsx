import { useMemo } from 'react';
import { Box, Group, Space, Title } from '@mantine/core';
import {
  MantineReactTable,
  type MantineReactTableProps,
} from 'mantine-react-table';
import { Pagination } from './Pagination';

interface TableProps {
  actions?: React.ReactElement;
  title?: string;
  total?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DataTable<TData extends Record<string, any> = object>({
  actions,
  title,
  total = 0,
  ...props
}: TableProps & MantineReactTableProps<TData>) {
  const totalPage = useMemo(() => {
    return total / 10 + (total % 10 === 0 ? 0 : 1);
  }, [total]);

  return (
    <Box>
      <Group pb="md" position="apart" align="baseline">
        {title && (
          <Title order={5} c="primary">
            {title}
          </Title>
        )}
        <Space />
        {actions}
      </Group>
      <MantineReactTable
        // initialState={{ density: 'sm' }}
        enableTopToolbar={false}
        enableBottomToolbar={false}
        enableDensityToggle={false}
        enableFilters={false}
        enableFullScreenToggle={false}
        enableHiding={false}
        mantineTableProps={{
          highlightOnHover: true,
        }}
        renderTopToolbarCustomActions={() => (
          <Group mb="md" position="apart">
            {title && <Title order={4}>{title}</Title>}
          </Group>
        )}
        mantinePaperProps={{
          shadow: 'none',
          radius: 'md',
          withBorder: false,
          sx: { overflow: 'auto' },
        }}
        mantineTableBodyCellProps={{
          fw: 500,
          sx: { color: '#172B4D' },
        }}
        {...props}
      />
      <Pagination total={totalPage} />
    </Box>
  );
}
