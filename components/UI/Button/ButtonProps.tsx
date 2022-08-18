import React, { ReactNode } from "react";
import { IconProps } from "../Icon";
import { ColorOptions, SizeOptions } from "../../../interfaces/types";

export type ButtonProps = {
  // button type is import for accessibility
  type: string;
  ariaLabel: string;
  color: ColorOptions;
  text?: string;
  children?: ReactNode;
  icon?: IconProps;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  loadingClassName?: string;
  href?: string;
  target?: string;
  disabled?: boolean;
  size?: SizeOptions;
}

