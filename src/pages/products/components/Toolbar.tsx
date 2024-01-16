import { Button, Group } from '@mantine/core';
import { IconPlus } from '@tabler/icons';
import { NavLink } from 'react-router-dom';
import { Search } from '@components/common';

export function Toolbar() {
  return (
    <Group position="apart" mb={32}>
      <Search />
      <Button
        component={NavLink}
        bg="primary.5"
        rightIcon={<IconPlus />}
        to="/d/products/create"
      >
        Create New Product
      </Button>
    </Group>
  );
}
