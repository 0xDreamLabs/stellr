import React from 'react';

export const Card = ({ children, classes }: { children: JSX.Element | JSX.Element[], classes?: string }) => (
  <div className={`flex w-80 p-4 m-4 overflow-auto border rounded-md ${classes || ''}`}>
    {children}
  </div>
);
export default Card;
