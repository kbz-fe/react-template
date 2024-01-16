import { Group, Pagination as Pg, type PaginationProps } from '@mantine/core';
import { useParamsHelper } from '@hooks/useParamsHelper';

export function Pagination(props: PaginationProps) {
  const { getParam, setParams } = useParamsHelper();
  const value = parseInt(getParam('page') || '1', 10);

  const handleChange = (page: number) => {
    setParams({
      limit: '10',
      page: page.toString(),
      skip: (props.total * (page - 1)).toString(),
    });
  };

  return (
    <Group p="md" pb={0} position="right">
      <Pg {...props} onChange={handleChange} value={value} />
    </Group>
  );
}
