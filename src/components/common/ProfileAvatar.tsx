import { Avatar, Group, Menu, Text, UnstyledButton } from '@mantine/core';
import { logout } from '@store/authSlice';
import { useAppSelector } from '@store/index';
import { IconChevronDown, IconLogout } from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function ProfileAvatar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    dispatch(logout());
    navigate('/');
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
