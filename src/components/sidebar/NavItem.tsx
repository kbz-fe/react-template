import { Group, Box, Text, UnstyledButton, createStyles } from '@mantine/core';
import { TablerIcon } from '@tabler/icons';
import { useNavigate, useMatch } from 'react-router-dom';
import { useIsMobile } from '@hooks/useIsMobile';

const useStyles = createStyles((theme, { active }: { active: boolean }) => {
  return {
    control: {
      fontWeight: 500,
      display: 'block',
      width: '100%',
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      fontSize: theme.fontSizes.sm,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },

    link: {
      display: 'flex',
      alignItems: 'center',
      color:
        theme.colorScheme === 'dark'
          ? theme.colors[active ? 'primary' : 'gray'][0]
          : theme.colors[active ? 'primary' : 'gray'][7],
    },
  };
});

interface NavItemProps {
  hidden?: boolean;
  label: string;
  icon?: TablerIcon;
  to: string;
  children?: React.ReactNode;
  onClick: () => void;
}

export function NavItem({
  children,
  hidden,
  icon: Icon,
  label,
  to,
  onClick,
}: NavItemProps) {
  const navigate = useNavigate();
  const isActive = useMatch(to);
  const isMobile = useIsMobile();
  const { classes } = useStyles({ active: Boolean(isActive) });

  const handleClick = () => {
    if (isMobile) onClick();
    if (to) navigate(to);
  };

  return (
    <UnstyledButton onClick={handleClick} className={classes.control}>
      <Group position="apart" spacing={0}>
        <Box className={classes.link}>
          {Icon && <Icon size={22} />}
          {children}
          {!hidden && (
            <Text ml="md" tt="capitalize">
              {label}
            </Text>
          )}
        </Box>
      </Group>
    </UnstyledButton>
  );
}
