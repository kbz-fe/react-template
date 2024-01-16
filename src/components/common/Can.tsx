import { Page403 } from '@components/page';
import { useRole } from '@hooks/useRole';

interface CanProps {
  condition?: boolean;
  children: React.ReactElement;
  perform: TypeOfUser[];
  page?: boolean;
}

export function Can({ perform, condition, children, page }: CanProps) {
  const page403 = page ? <Page403 /> : null;
  const { role } = useRole();

  if (!perform.includes(role)) return page403;
  if (condition !== undefined && !condition) return page403;

  return children;
}
