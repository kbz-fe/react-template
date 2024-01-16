import { Box, Center, Skeleton } from '@mantine/core';

const spacing = 30;
const spacingXl = 50;

export function FormLoading() {
  return (
    <Box className="mx-auto w-4/5">
      <Skeleton height={40} mb={spacingXl} width="60%" />
      <Skeleton height={30} mt={spacing} />
      <Skeleton height={30} mt={spacing} />
      <Skeleton height={30} mt={spacing} />
      <Skeleton height={30} mt={spacing} />
      <Skeleton height={30} mt={spacing} />
      <Center mt={spacingXl}>
        <Skeleton height={40} width="60%" />
      </Center>
    </Box>
  );
}
