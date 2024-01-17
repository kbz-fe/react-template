import { ActionIcon, Group } from '@mantine/core';
import { IconEdit, IconEye } from '@tabler/icons';
import { Link } from 'react-router-dom';

export function ActionItem({ row }: any) {
  return (
    <Group spacing="xs" noWrap>
      <ActionIcon
        component={Link}
        aria-label="View product"
        to={`/d/stats/products/${row.original.id}`}
      >
        <IconEye />
      </ActionIcon>
      <ActionIcon
        component={Link}
        aria-label="Edit product"
        to={`/d/stats/products/edit/${row.original.id}`}
      >
        <IconEdit />
      </ActionIcon>
    </Group>
  );
}
