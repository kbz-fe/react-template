import { PageStats } from './PageStat';

export function Page503() {
  return (
    <PageStats
      status={503}
      title="All of our servers are busy"
      description="We cannot handle your request right now, please wait for a couple of minutes and refresh the page. Our team is already working on this issue."
    />
  );
}
