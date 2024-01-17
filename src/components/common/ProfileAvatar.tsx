import { Avatar, Group, Menu, Text, UnstyledButton } from '@mantine/core';
import { logout } from '@store/authSlice';
import { IconChevronDown, IconLogout } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';

export function ProfileAvatar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);

  const handleLogout = async () => {
    dispatch(logout());
  };

  if (!user) return <Avatar radius="xl" onClick={handleLogout} />;
  return (
    <Menu width={200} position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Group>
            <Avatar radius="xl" />
            <Text truncate maw={200}>
              {user.username}
            </Text>
            <IconChevronDown size={18} />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconLogout size={14} />} onClick={handleLogout}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
