import React, { createContext, useState, useContext } from 'react';

interface AppContextProps {
	progress: number;
	setProgress: (val: number) => void;
	notification: string;
	setNotification: (val: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) throw new Error('useTheme must be used within a ThemeProvider');

	return context;
};

interface AppProviderProps {
	children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
	const [progress, setProgress] = useState(0);
	const [notification, setNotification] = useState('');

	const contextValue = {
		progress,
		setProgress,
		notification,
		setNotification,
	};

	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	);
};
