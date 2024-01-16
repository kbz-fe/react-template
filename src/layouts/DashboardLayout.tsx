import { useState } from 'react';
import {
  AppShell,
  Burger,
  Header,
  Group,
  useMantineTheme,
} from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Logo, ProfileAvatar } from '@components/common';
import { Sidebar } from '@components/sidebar';
import { useAuthedRoute } from '@hooks/useAuth';

export function DashboardLayout() {
  useAuthedRoute();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(true);

  return (
    <AppShell
      fixed
      styles={{
        main: {
          overflow: 'hidden',
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.white,
        },
      }}
      asideOffsetBreakpoint="sm"
      navbarOffsetBreakpoint="sm"
      navbar={<Sidebar open={opened} onClose={() => setOpened(false)} />}
      header={
        <Header height={{ base: 50, md: 60 }}>
          <Group position="apart" mx="md" sx={{ height: '100%' }}>
            <div>
              <Burger
                mr="xl"
                size="sm"
                opened={false}
                color={theme.colors.gray[6]}
                onClick={() => setOpened((o) => !o)}
              />
              <Logo />
            </div>
            <Group>
              <ProfileAvatar />
            </Group>
          </Group>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
}
