import { MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: any = {
  Modal: {
    defaultProps: {
      radius: 'md',
      centered: true,
      closeButtonProps: {
        size: 'md',
      },
    },
    styles: (theme: MantineTheme) => ({
      trapFocus: false,
      content: { padding: 0 },
      header: { padding: 32, paddingBottom: 0, position: 'static' },
      body: { marginTop: 16 },
      title: {
        fontSize: 24,
        fontWeight: 600,
        color: theme.colors.neutral[8],
      },
      close: {
        top: 16,
        right: 16,
        position: 'absolute',
      },
    }),
  },
};

export default components;
