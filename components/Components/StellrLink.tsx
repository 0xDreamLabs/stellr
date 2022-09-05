/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React, { ReactNode } from 'react';

declare type InternalLinkProps = {
  ariaLabel: string,
  children: ReactNode,
  // all props below are NEXT/Link Props
  href: string;
  as?: string;
  replace?: boolean;
  /**
   * TODO-APP
   */
  soft?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  legacyBehavior?: boolean;
  /**
   * requires experimental.newNextLinkBehavior
   */
  onMouseEnter?: (e: any) => void;
  /**
   * requires experimental.newNextLinkBehavior
   */
  onTouchStart?: (e: any) => void;
  /**
   * requires experimental.newNextLinkBehavior
   */
  onClick?: (e: any) => void;
};

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
