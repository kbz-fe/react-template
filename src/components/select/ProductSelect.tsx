import { useMemo } from 'react';
import { Select } from '@mantine/core';
import type { SelectProps } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { productsKeys } from '@config/query-keys';
import { useSelectParams } from '@hooks/useSelectParams';
import { getProducts } from '@services/products';

export function BranchSelect(props: Omit<SelectProps, 'data'>) {
  const { params, onSearch } = useSelectParams();
  const { data } = useQuery({
    queryKey: productsKeys.list(params),
    queryFn: () => getProducts(params),
  });

  const options = useMemo(() => {
    if (!data?.data?.success || !data?.data?.data) return [];
    return (data?.data?.data?.branches || []).map(
      (record: Record<string, unknown>) => {
        return {
          value: record.BRANCH_ID,
          label: record.BRANCH_NAME ?? '-',
        };
      }
    );
  }, [data]);

  return (
    <Select
      clearable
      searchable
      {...props}
      data={options}
      placeholder={props.placeholder}
      onSearchChange={onSearch}
    />
  );
}
