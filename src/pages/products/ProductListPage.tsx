import { Box, Divider, NavLink, Stack, useMantineTheme } from '@mantine/core';
import { MRT_ColumnDef } from 'mantine-react-table';
import { Link } from 'react-router-dom';
import { Card } from '@components/common';
import { DataTable, renderAmountCell } from '@components/core';
import { useIsMobile } from '@hooks/useIsMobile';
import { useParamsHelper } from '@hooks/useParamsHelper';
import { useGetProductsQuery } from '@services/products.api';
import { ActionItem } from './components/ActionItems';
import { Toolbar } from './components/Toolbar';

const columns: MRT_ColumnDef<Product>[] = [
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Category',
    accessorKey: 'category',
  },
  {
    header: 'Price',
    accessorKey: 'price',
    Cell: renderAmountCell,
  },
  {
    header: 'Discount',
    accessorKey: 'discountPercentage',
    Cell: renderAmountCell,
  },
  {
    header: 'Rating',
    accessorKey: 'rating',
    Cell: renderAmountCell,
  },
  {
    header: 'Stock',
    accessorKey: 'stock',
    Cell: renderAmountCell,
  },
];

/**
 * Filter Products by Searched Text is not implemented yet due to API limitation
 */

export function ProductListPage() {
  const { getParam } = useParamsHelper();
  const theme = useMantineTheme();
  const isMobile = useIsMobile();

  const limit = getParam('limit') || undefined;
  const skip = getParam('skip') || undefined;
  const search = getParam('search') || undefined;

  const { data, isLoading } = useGetProductsQuery({
    limit,
    skip,
    search,
  });

  return (
    <Card
      p={0}
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        height: '100%',
      }}
    >
      <Stack sx={{ flexBasis: 180, gap: 0, fontWeight: 500 }}>
        <NavLink active component={Link} to="#" label="Inbox" />
      </Stack>

      <Divider orientation="vertical" mr={theme.spacing.xs} />

      <Box
        sx={{
          flexBasis: 0,
          flexGrow: 1,
          overflowX: 'scroll',
        }}
      >
        <DataTable
          columns={columns}
          enableRowActions
          data={data?.products ?? []}
          total={data?.total}
          state={{
            isLoading,
            columnPinning: {
              right: ['mrt-row-actions'],
            },
          }}
          actions={<Toolbar />}
          renderRowActions={({ row }) => <ActionItem row={row} />}
          positionActionsColumn="last"
          enablePinning
          mantineTableContainerProps={{
            sx: {
              height: 'calc(100vh - 300px)',
            },
          }}
        />
      </Box>
    </Card>
  );
}
