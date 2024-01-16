import { PageStats } from './PageStat';

export function Page403() {
  return (
    <PageStats
      status={403}
      title="Permission denied."
      description=" You don't have permission to access this page. Please connect to administrator to access this page"
    />
  );
}
