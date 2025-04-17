import type React from 'react';
import type { ReactNode } from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
	children,
	fluid = false,
	className = '',
	...props
}) => {
	const classes = [fluid ? 'container-fluid' : 'container'];

	if (className) classes.push(className);

	return (
		<div className={classes.join(' ')} {...props}>
			{children}
		</div>
	);
};
