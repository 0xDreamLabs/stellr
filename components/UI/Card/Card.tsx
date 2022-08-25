import React from 'react';

export const Card = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <div className="flex flex-col justify-between w-80 p-4 m-4 overflow-auto border-2">
    {children}
  </div>
);
export default Card;