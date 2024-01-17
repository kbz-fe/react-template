import { Box, Image } from '@mantine/core';
import BgBlueImg from '@assets/images/svg/auth-bg-blue.svg';

export function BgBlue() {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
      }}
    >
      <Image src={BgBlueImg} />
    </Box>
  );
}
