import { classNamesModule } from '@utils/classNamesModule';
import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type ButtonVariant =
	| 'primary'
	| 'secondary'
	| 'outline'
	| 'outline-primary'
	| 'outline-secondary';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	fullWidth?: boolean;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'medium',
	fullWidth = false,
	disabled = false,
	className = '',
	...rest
}) => {
	const buttonClasses = classNamesModule(
		styles,
		'button',
		variant,
		size,
		fullWidth && 'fullWidth',
		disabled && 'disabled',
		className
	);

	return (
		<button className={buttonClasses} disabled={disabled} {...rest}>
			{children}
		</button>
	);
};

export default Button;
