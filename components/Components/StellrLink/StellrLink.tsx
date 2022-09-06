/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import InternalLinkProps from './StellrLinkProps';

const StellrLink = ({
  ariaLabel,
  children,
  href,
  as,
  replace,
  soft,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  legacyBehavior,
  onMouseEnter,
  onTouchStart,
  onClick,
}: InternalLinkProps) => (
  <Link
    href={href}
    as={as}
    replace={replace}
    soft={soft}
    scroll={scroll}
    shallow={shallow}
    passHref={passHref}
    prefetch={prefetch}
    locale={locale}
    legacyBehavior={legacyBehavior}
    onMouseEnter={onMouseEnter}
    onTouchStart={onTouchStart}
    onClick={onClick}
  >
    <a aria-label={ariaLabel || ''}>{children}</a>
  </Link>
);

export default StellrLink;
