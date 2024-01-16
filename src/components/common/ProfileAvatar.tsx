import { Avatar, Group, Menu, Text, UnstyledButton } from '@mantine/core';
import { IconChevronDown, IconLogout } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@hooks/useUser';
import { removeAuth } from '@utils/auth';

export function ProfileAvatar() {
  const navigate = useNavigate();
  const { user, removeUser } = useUserStore((state: any) => state);

  const handleLogout = async () => {
    removeAuth();
    removeUser();
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
              ({user.TYPE_OF_USER}) {user?.USER_NAME}
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
