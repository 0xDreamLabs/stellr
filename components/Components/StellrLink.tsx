/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';

const StellrLink = (props:any) => {
  const { ariaLabel, children } = props;
  return (
    <Link {...props}>
      <a aria-label={ariaLabel || ''}>{children}</a>
    </Link>
  );
};

export default StellrLink;
