import { PageStats } from './PageStat';

export function Page500() {
  return (
    <PageStats
      status={500}
      title="Something bad just happened..."
      description="Our servers could not handle your request. Don't worry, our development team was already notified. Try refreshing the page."
    />
  );
}
