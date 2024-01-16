import { useEffect, useState } from 'react';

export function useAppSetup() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  return init;
}
