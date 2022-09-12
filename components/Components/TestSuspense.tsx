import React from 'react';
import useSWR from 'swr';

import Agents from '../../agents/agents';

const TestSuspense = ({ classes }: { classes: string }) => {
  const { params, fetcher, fetchOptions } = Agents.testRequest.getTestData({ suspense: true });
  const { data } = useSWR(params, fetcher, fetchOptions);

  return (
    <div className={`${classes || 'bg-blue-200'} h-48 max-w-xl overflow-scroll mx-auto my-4 p-4 rounded-lg`}>
      {/* This is a test component */}
      <div>
        {data}
        <p> SOME OTHER COMPONENTE </p>
      </div>

    </div>
  );
};

export default TestSuspense;
