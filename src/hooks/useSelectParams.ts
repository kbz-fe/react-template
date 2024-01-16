import { useMemo, useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { queryString } from '@utils/helper';

export function useSelectParams() {
  const [value, setValue] = useState('');
  const [search] = useDebouncedValue(value, 500);

  const params = useMemo(() => {
    return queryString({
      page: 1,
      limit: 50,
      search,
    });
  }, [search]);
  const onSearch = (v: any) => {
    setValue(v);
  };

  return {
    params,
    search,
    onSearch,
  };
}
