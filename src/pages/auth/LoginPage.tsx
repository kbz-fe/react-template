import {
  Box,
  Button,
  Center,
  Paper,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { loginSuccess } from '@store/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '@assets/images/logo/logo-no-slogan.webp';
import { DASHBOARD_ROUTE } from '@config/const';
import { useAuthRoute } from '@hooks/useAuth';
import { useLoginMutation } from '@services/authApi';
import { loginSchema } from '@utils/schema';
import { BgBlue } from './components/BgBlue';
import { BgRed } from './components/BgRed';

export function LoginPage() {
  useAuthRoute();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const form = useForm({
    initialValues: {
      loginId: '',
      password: '',
    },
    validate: zodResolver(loginSchema),
  });

  const handleSubmit = async () => {
    const res: any = await login({
      username: 'kminchelle',
      password: '0lelplR',
    });

    if (res.error) {
      // handle error
    }

    if (res.data) {
      dispatch(
        loginSuccess({
          token: res.data.token,
          user: { username: res.data.username },
        })
      );
      navigate(DASHBOARD_ROUTE);
    }
  };

  return (
    <Center
      w="100%"
      h="100vh"
      sx={{
        position: 'relative',
      }}
    >
      <Paper
        withBorder
        p={30}
        py={50}
        mb={50}
        miw={400}
        radius="md"
        shadow="md"
        component="form"
        onSubmit={form.onSubmit(handleSubmit)}
      >
        <Box component="img" alt="logo" src={logo} height={50} />
        <TextInput
          mt={20}
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
        <Button loading={isLoading} fullWidth mt="xl" type="submit">
          Login
        </Button>
      </Paper>

      <Text color="dimmed" sx={{ position: 'absolute', bottom: 20 }}>
        Copyright © 2020 KBZ Bank. All rights reserved.
      </Text>

      <BgBlue />
      <BgRed />
    </Center>
  );
}
