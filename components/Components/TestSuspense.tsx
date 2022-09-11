import React from 'react';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import useSWR from 'swr';

import Agents from '../../agents/agents';
import { useHasMounted } from '../../hooks';

const TestSuspense = () => {
  const hasMounted = useHasMounted();
  const { data } = Agents.testRequest.getTestData(hasMounted, { suspense: true });
  // console.log('DATA3, ERROR3', data3, error3);
  // const [hasMounted, setHasMounted] = useState(false);
  // const { data } = useSWR(hasMounted ? 'https://deelay.me/3000/htotps://baconipsum.com/api/?type=meat-and-filler' : null, async (url: string) => {
  //   const result = await axios(url);
  //   return result.data;
  // }, { suspense: true });
  // useEffect(() => setHasMounted(true), []);
  // const [newData, setNewData] = useState('');
  // useEffect(() => setNewData(data), []);
  // useEffect(() => {
  //   const doFetch = async () => {
  //     const fetchedData = await;

  //     console.log('fetchedData', fetchedData);
  //     setData(fetchedData.data);
  //   };
  //   doFetch();
  // }, []);
  const isServer = typeof window === 'undefined';
  console.log('isServer:', isServer);
  return (
    <div className="">
      {/* This is a test component */}
      {/* <img src="" alt="" className="w-12 h-12" /> */}
      {/* {data3} */}
      {/* <Suspense fallback={<p> IS LOADING </p>}> */}
      <p>{data}</p>
      {/* </Suspense> */}

    </div>
  );
};
export default TestSuspense;
