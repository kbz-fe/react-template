import { Paper, PaperProps } from '@mantine/core';

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children, ...restProps }: CardProps & PaperProps) {
  return (
    <Paper shadow="sm" m="md" p="md" {...restProps}>
      {children}
    </Paper>
  );
}
