import { ColorOptions, SizeOptions } from "../../../interfaces/types";

export type IconProps = {
    name: string;
    color:  ColorOptions;
    size: SizeOptions;
    solid?: boolean;
    className?: string;
    position?: 'left' | 'right' | 'none';
    rotate?: boolean;
} & {
	[key: string]: JSX.Element;
};
