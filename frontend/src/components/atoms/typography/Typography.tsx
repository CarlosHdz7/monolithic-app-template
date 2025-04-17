import { classNamesModule } from '@utils/classNamesModule';
import type React from 'react';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './Typography.module.css';

type TypographyVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'subtitle1'
	| 'subtitle2'
	| 'body1'
	| 'body2'
	| 'caption'
	| 'overline';

type TypographyAlign = 'left' | 'center' | 'right' | 'justify';
type TypographyWeight = 'normal' | 'medium' | 'bold';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
	variant?: TypographyVariant;
	align?: TypographyAlign;
	weight?: TypographyWeight;
	color?: string;
	noWrap?: boolean;
	gutterBottom?: boolean;
	className?: string;
	as?: ElementType;
	children: ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
	children,
	variant = 'body1',
	align = 'left',
	weight = 'normal',
	color,
	noWrap = false,
	gutterBottom = false,
	className = '',
	as,
	...rest
}) => {
	// Determine which HTML element to use based on variant
	const getDefaultElement = (): ElementType => {
		if (variant.startsWith('h')) {
			return variant as ElementType; // h1, h2, etc.
		}
		if (variant.startsWith('subtitle')) {
			return 'h6';
		}
		return 'p';
	};

	const Component = as || getDefaultElement();

	const typographyClasses = classNamesModule(
		styles,
		'typography',
		variant,
		`align-${align}`,
		`weight-${weight}`,
		noWrap && 'noWrap',
		gutterBottom && 'gutterBottom',
		className
	);

	const style = color ? { color, ...rest.style } : rest.style;

	return (
		<Component className={typographyClasses} style={style} {...rest}>
			{children}
		</Component>
	);
};

export default Typography;
