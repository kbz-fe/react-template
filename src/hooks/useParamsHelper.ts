import { pickBy, identity } from 'lodash-es';
import { useSearchParams } from 'react-router-dom';

function removeNil(obj: Record<string, string>) {
  return pickBy(obj, identity);
}

export function useParamsHelper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (key: string) => searchParams.get(key);

  const getParams = () => Object.fromEntries([...searchParams]);

  const replaceParams = (newParams: Record<string, string>) => {
    setSearchParams(removeNil(newParams));
  };

  const setParam = (key: string, value?: string | number) => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams(removeNil({ ...params, [key]: `${value}` }));
  };

  const setParams = (newParams: Record<string, string>) => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams(removeNil({ ...params, ...newParams }));
  };

  return {
    getParam,
    getParams,
    replaceParams,
    setParam,
    setParams,
    searchParams,
  };
}
