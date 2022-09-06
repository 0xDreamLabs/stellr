import { ReactNode } from 'react';

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
export default InternalLinkProps;
