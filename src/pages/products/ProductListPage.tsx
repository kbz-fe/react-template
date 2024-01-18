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
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      <Box w={isMobile ? '100%' : 250} mb={100}>
        <NavLink active component={Link} to="#" label="Inbox" />
        <NavLink component={Link} to="#" label="Approve" />
        <NavLink component={Link} to="#" label="Reject" />
      </Box>
      <Divider orientation="vertical" mr={theme.spacing.xs} />
      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        <Toolbar />
        <DataTable
          columns={columns}
          data={data?.products ?? []}
          total={data?.total}
          state={{
            isLoading,
            columnPinning: {
              right: ['mrt-row-actions'],
            },
          }}
          renderRowActions={({ row }) => <ActionItem row={row} />}
          positionActionsColumn="last"
          mantineTableContainerProps={{
            w: '100%',
            h: 'calc(100vh - 300px)',
          }}
        />
      </Box>
    </Card>
  );
}
