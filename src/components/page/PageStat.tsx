import { createStyles, Title, Text, Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: Number(theme.spacing.xl) * 1.5,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: Number(theme.spacing.xl) * 1.5,
  },
}));

interface PageStatsProps {
  status: string | number;
  title: string;
  description?: string;
  extra?: React.ReactNode;
}

export function PageStats({
  description,
  extra,
  status,
  title,
}: PageStatsProps) {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>{status}</div>
      <Title className={classes.title}>{title}</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        {description}
      </Text>
      {extra}
    </Container>
  );
}
