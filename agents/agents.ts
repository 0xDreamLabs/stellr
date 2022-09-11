import axios from 'axios';
import useSWR from 'swr';
// import { useHasMounted } from '../hooks/useHasMounted';

// const hasMounted = useHasMounted();

const getErrorMsg = (errorCode: any) => {
  switch (errorCode) {
    case 'ERR_NETWORK':
      return 'Network Error';
    default:
      return 'Unknown Error';
  }
};

// Define our request types
const requests = {
  /*
    For get methods we want to use SWR for advanced data fetching https://swr.vercel.app/

    Reading get methods in components will look like:
    const { data, error } = Agents.testRequest.getTestData();

    Optionally you can pass "fetchOptions" into useSWR hook like so:
    const { data, error } = Agents.testRequest.getTestData({ focusThrottleInterval: 20000 })
  */
  get: (url: string, hasMounted: boolean, responseType?: any, headers?: any, fetchOptions: any = {}) => {
    console.log('lol', hasMounted, fetchOptions);
    const { data, error } = useSWR(hasMounted ? [url || null, responseType, headers] : null, () => axios({
      method: 'get',
      url,
      responseType: responseType || '',
      headers,
    }), { ...fetchOptions });
    return { data: data?.data, error: error ? getErrorMsg(error?.code) : undefined };
  },
  post: (url: string, data: any, headers: any) => axios({
    method: 'post',
    url,
    headers,
    data,
  }),
  put: (url: string, data: any, headers: any) => axios({
    method: 'put',
    url,
    headers,
    data,
  }),
};
// https://deelay.me/6000/https://baconipsum.com/api/?type=meat-and-filler
// https://baconipsum.com/api/?type=meat-and-filler

const testRequest = {
//   getTestData: (fetchOptions: any) => requests.get('https://deelay.me/2000/https://baconipsum.com/api/?type=meat-and-filler', fetchOptions),
  getTestData: (hasMounted: boolean, fetchOptions: any) => requests.get('https://baconipsum.com/api/?type=meat-and-filler', hasMounted, null, null, fetchOptions),

};

export default {
  testRequest,
};
