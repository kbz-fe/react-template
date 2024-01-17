import { Box, Divider, NavLink, Stack, useMantineTheme } from '@mantine/core';
import { Link, Outlet } from 'react-router-dom';
import { Card } from '@components/common';

export function ProductLayout() {
  const theme = useMantineTheme();

  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: theme.spacing.xs,
        height: '100%',
      }}
    >
      <Stack style={{ flexBasis: 180, gap: 0 }}>
        <NavLink active component={Link} to="#" label="Inbox" />
        <NavLink component={Link} to="sales" label="Sales" />
      </Stack>

      <Divider orientation="vertical" mx={theme.spacing.xs} />

      <Box style={{ flexGrow: 1, overflowX: 'scroll' }}>
        <Outlet />
      </Box>
    </Card>
  );
}
