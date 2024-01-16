import { MRT_ColumnDef } from 'mantine-react-table';
import { DataTable, renderAmountCell } from '@components/core';
import { useParamsHelper } from '@hooks/useParamsHelper';
import { useGetProductsQuery } from '@services/products';
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
 * Product Search is not implemented yet due to API limitation
 */

export function ProductListPage() {
  const { getParam } = useParamsHelper();

  const limit = getParam('limit') || undefined;
  const skip = getParam('skip') || undefined;
  const search = getParam('search') || undefined;

  const { data, isLoading } = useGetProductsQuery({
    limit,
    skip,
    search,
  });

  return (
    <DataTable
      columns={columns}
      enableRowActions
      data={data?.products ?? []}
      total={data?.total}
      title="All Product List"
      state={{
        isLoading,
      }}
      actions={<Toolbar />}
      renderRowActions={({ row }) => <ActionItem row={row} />}
    />
  );
}
