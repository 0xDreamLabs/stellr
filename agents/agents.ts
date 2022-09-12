import axios from 'axios';

export const getErrorMsg = (errorCode: any) => {
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
    const { params, fetcher, fetchOptions } = Agents.testRequest.getTestData();
    const { data, error } = useSWR(params, fetcher, fetchOptions);

    Optionally you can pass "fetchOptions" to useSWR directly or but adding them to the
    Agents request like so (if you use suspense, which you should, you should { suspense: true } ):
    const { params, fetcher, fetchOptions } = Agents.testRequest.getTestData({ suspense: true, focusThrottleInterval: 20000 });
    const { data, error } = useSWR(params, fetcher, fetchOptions);
  */
  get: async (url: string, responseType?: any, headers?: any) => {
    const response = await axios({
      method: 'get', url, responseType, headers,
    });
    return response.data;
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

/*
  These are test api routes:
    Delayed Api Response (change number to control milliseconds):
    https://deelay.me/6000/https://baconipsum.com/api/?type=meat-and-filler

    Fast Api Response:
    https://baconipsum.com/api/?type=meat-and-filler
*/

const testRequest = {
  getTestData: (fetchOptions?: any, responseType?: any, headers?: any) => ({
    params: ['https://deelay.me/6000/https://baconipsum.com/api/?type=meat-and-filler', responseType, headers],
    fetcher: requests.get,
    fetchOptions,
  }),

};

export default {
  testRequest,
};
