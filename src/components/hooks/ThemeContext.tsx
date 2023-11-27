import React, { createContext, useContext, useState } from 'react';

interface ThemeContextProps {
	isDarkMode: boolean;
	handleToggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error('useTheme must be used within a ThemeProvider');

	return context;
};

interface ThemeProviderProps {
	children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const isDefaultMode = localStorage.getItem('isDarkMode') === 'false';
	const [isDarkMode, setIsDarkMode] = useState<boolean>(!isDefaultMode);

	const handleToggleTheme = () => {
		setIsDarkMode((prev) => {
			const newMode = !prev;
			localStorage.setItem('isDarkMode', String(newMode));
			return newMode;
		});
	};

	const themeValues = {
		isDarkMode,
		handleToggleTheme,
	};

	return (
		<ThemeContext.Provider value={themeValues}>
			{children}
		</ThemeContext.Provider>
	);
};
