import { Box, Image } from '@mantine/core';
import BgRedImg from '@assets/images/svg/auth-bg-red.svg';

export function BgRed() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Image src={BgRedImg} />
    </Box>
  );
}
