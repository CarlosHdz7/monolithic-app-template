import Button from '@components/atoms/button';
import { ROUTES } from '@constants/routes';
import { useTheme } from '@contexts/theme/themeContext';
// Navbar.tsx
import type React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

interface NavbarProps {
	logo?: React.ReactNode;
}

type MenuItems = Array<{
	isActive?: boolean;
	label: string;
	to: string; // Cambiado de 'href' a 'to' para seguir la convención de React Router
	icon?: React.ReactNode;
	end?: boolean; // Para controlar el comportamiento de NavLink exacto
}>;

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { theme, setTheme } = useTheme();
	const [lang, setLang] = useState('en'); // Estado para el idioma
	const { t, i18n } = useTranslation();

	const menuItems: MenuItems = [
		{ label: t('navbar.home'), to: '/', isActive: true },
		{ label: t('navbar.about'), to: ROUTES.public.about },
		{ label: t('navbar.login'), to: '/auth/login' },
		{ label: t('navbar.signup'), to: '/auth/signup' },
	];

	useEffect(() => {
		i18n.changeLanguage(lang);
	}, [i18n, lang]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Cierra el menú cuando se hace clic en un enlace (en dispositivos móviles)
	const handleLinkClick = () => {
		if (isMenuOpen) {
			setIsMenuOpen(false);
		}
	};

	return (
		<header className={styles.navbar}>
			<div className={styles.container}>
				<div className={styles.navbarBrand}>
					{logo ? (
						<Link to='/' className={styles.logo}>
							{logo}
						</Link>
					) : (
						<Link to='/' className={styles.logoText}>
							Brand
						</Link>
					)}
				</div>

				<button
					type='button'
					className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
					onClick={toggleMenu}
					aria-label='Toggle menu'
					aria-expanded={isMenuOpen}
				>
					<span className={styles.hamburger} />
				</button>

				<nav className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
					<ul className={styles.navLinks}>
						{menuItems.map((item, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<li key={index} className={styles.navItem}>
								<NavLink
									to={item.to}
									end={item.end}
									className={({ isActive }) =>
										`${styles.navLink} ${isActive ? styles.active : ''}`
									}
									onClick={handleLinkClick}
								>
									{item.icon && (
										<span className={styles.navIcon}>{item.icon}</span>
									)}
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>

					{setTheme && (
						<Button
							variant='primary'
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							className={styles.themeToggle}
							aria-label='Toggle theme'
						>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								color={theme === 'dark' ? 'white' : 'black'}
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z'
									fill='currentColor'
								/>
								<path
									d='M12 0V4M12 20V24M0 12H4M20 12H24M3.5 3.5L6.3 6.3M17.7 17.7L20.5 20.5M3.5 20.5L6.3 17.7M17.7 6.3L20.5 3.5'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
								/>
							</svg>
						</Button>
					)}

					<Button
						variant='primary'
						onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
					>
						{lang === 'en' ? 'EN' : 'ES'}
					</Button>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
