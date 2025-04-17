import type React from 'react';
import type { ReactNode } from 'react';

type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around';
type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type FlexDirection = 'row' | 'column';

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	justifyContent?: JustifyContent;
	alignItems?: AlignItems;
	flexDirection?: FlexDirection;
}

export const Row: React.FC<RowProps> = ({
	children,
	className = '',
	justifyContent,
	alignItems,
	flexDirection,
	...props
}) => {
	const classes = ['row'];

	if (className) classes.push(className);
	if (justifyContent) classes.push(`justify-content-${justifyContent}`);
	if (alignItems) classes.push(`align-items-${alignItems}`);
	if (flexDirection) classes.push(`flex-${flexDirection}`);

	return (
		<div className={classes.join(' ')} {...props}>
			{children}
		</div>
	);
};
