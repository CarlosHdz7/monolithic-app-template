import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'light' | 'dark' | 'high-contrast';

interface ThemeContextType {
	theme: ThemeType;
	setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	// Intentar obtener el tema guardado en localStorage o usar preferencia del sistema
	const getInitialTheme = (): ThemeType => {
		const savedTheme = localStorage.getItem('theme') as ThemeType | null;

		if (savedTheme && ['light', 'dark', 'high-contrast'].includes(savedTheme)) {
			return savedTheme;
		}

		return 'light';
	};

	const [theme, setTheme] = useState<ThemeType>(getInitialTheme);

	// Aplicar el tema cuando cambie
	useEffect(() => {
		// Guardar en localStorage
		localStorage.setItem('theme', theme);

		// Eliminar clases de tema anteriores
		document.documentElement.classList.remove(
			'theme-light',
			'theme-dark',
			'theme-high-contrast'
		);

		// Aplicar la clase del tema actual
		document.documentElement.classList.add(`theme-${theme}`);

		// También establecer el atributo data-theme para posible uso en CSS
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	// Escuchar cambios en la preferencia del sistema
	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const handleChange = () => {
			// Solo cambiar automáticamente si no hay una preferencia guardada
			if (!localStorage.getItem('theme')) {
				setTheme(mediaQuery.matches ? 'dark' : 'light');
			}
		};

		// Listeners modernos
		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, []);

	const value = { theme, setTheme };

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

// Hook para usar el tema
export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
