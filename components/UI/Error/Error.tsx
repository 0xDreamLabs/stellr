import React from 'react';
import Icon from '../Icon';
import Card from '../Card';

export const Error = ({ errorMsg }: { errorMsg: string }) => (
  <Card classes="bg-red-200 border-red-500 items-center justify-center">
    <Icon size="medium" name="exclamation-circle" color="red" />
    <p className="pl-2 text-red-500">{errorMsg}</p>
  </Card>
);
export default Error;
