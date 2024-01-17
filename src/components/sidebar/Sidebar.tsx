import { Drawer, Navbar, ScrollArea, createStyles } from '@mantine/core';
import { menus } from '@config/menus';
import { useIsMobile } from '@hooks/useIsMobile';
import { NavItem } from './NavItem';

export interface NavbarMenusProps {
  open: boolean;
  onClose: () => void;
}

export interface NavbarWrapperProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const useStyles = createStyles(() => ({
  navbar: {
    paddingBottom: 0,
  },
  section: {},
}));

export function NavbarWrapper({ open, onClose, children }: NavbarWrapperProps) {
  const isMobile = useIsMobile();
  const { classes } = useStyles();

  if (isMobile) {
    return (
      <Drawer
        opened={open}
        onClose={onClose}
        padding="md"
        withCloseButton={false}
      >
        {children}
      </Drawer>
    );
  }

  return (
    <Navbar className={classes.navbar} width={{ base: !open ? 60 : 270 }}>
      {children}
    </Navbar>
  );
}

export function Sidebar({ open, onClose }: NavbarMenusProps) {
  const { classes } = useStyles();
  return (
    <NavbarWrapper open={open} onClose={onClose}>
      <Navbar.Section
        grow
        type="scroll"
        scrollHideDelay={0}
        component={ScrollArea}
        className={classes.section}
      >
        {menus.map((item) => (
          <NavItem
            item={item}
            hidden={!open}
            key={item.label}
            onClick={onClose}
          />
        ))}
      </Navbar.Section>
    </NavbarWrapper>
  );
}
