import {
  ColorSchemeProvider,
  ColorScheme,
  MantineProvider,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { theme } from './theme';

interface MantineConfigProps {
  children: React.ReactNode;
}

export function MantineConfig({ children }: MantineConfigProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          ...theme,
          colorScheme,
        }}
      >
        <Notifications />
        <ModalsProvider>{children}</ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
