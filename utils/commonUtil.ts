import { Fetcher } from 'swr';

export const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];

// export const fetcher = (...rest: any) => fetch(...rest).then((res) => res?.json());
// export const fetcher<JSON = any> = (input: RequestInfo, init?: RequestInit): Promise<JSON> => {
//   const res = await fetch(input, init)
//   return res.json()
// }

export const fetcher: Fetcher = async (url: string) => {
  const data = await fetch(url);
  return data.json();
};
