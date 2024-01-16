import {
  Box,
  Button,
  Center,
  Paper,
  PasswordInput,
  Text,
  Title,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import logo from '@assets/images/logo/logo-no-slogan.webp';
import { useAuthRoute } from '@hooks/useAuth';
import { loginSchema } from '@utils/schema';
import { useLogin } from './queries';

export function LoginPage() {
  useAuthRoute();
  const theme = useMantineTheme();
  const { mutate, isLoading } = useLogin();

  const form = useForm({
    initialValues: {
      loginId: '',
      password: '',
    },
    validate: zodResolver(loginSchema),
  });

  return (
    <Box
      w="100vw"
      h="100vh"
      sx={{
        background:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.colors.white,
      }}
    >
      <Center h="100vh">
        <Box>
          <Paper
            p={30}
            py={50}
            mb={20}
            miw={400}
            radius="md"
            shadow="md"
            component="form"
            onSubmit={form.onSubmit((values) => mutate(values))}
          >
            <Box component="img" alt="logo" src={logo} height={50} />
            <Title c="primary" order={2} my={10}>
              Login to your CMS Account
            </Title>
            <TextInput
              withAsterisk
              label="Employee ID"
              {...form.getInputProps('loginId')}
            />
            <PasswordInput
              withAsterisk
              mt="md"
              label="Password"
              {...form.getInputProps('password')}
            />
            <Button fullWidth loading={isLoading} mt="xl" type="submit">
              Login
            </Button>
          </Paper>

          <Text color="dimmed" ta="center" fw={400}>
            Copyright © 2020 KBZ Bank. All rights reserved.
          </Text>
        </Box>
      </Center>
    </Box>
  );
}
