import { useMemo } from 'react';
import { Box, useMantineTheme } from '@mantine/core';
import logo from '@assets/images/logo/logo.webp';
import logoWhite from '@assets/images/logo/logo_white.webp';

export function Logo() {
  const theme = useMantineTheme();
  const isDark = useMemo(
    () => theme.colorScheme === 'dark',
    [theme.colorScheme]
  );

  return <Box component="img" height={30} src={isDark ? logoWhite : logo} />;
}
