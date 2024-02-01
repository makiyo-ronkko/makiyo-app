import React, { createContext, useState, useContext } from 'react';

type PageType = 'login' | 'signup' | 'loginSuccess' | 'signupSuccess' | 'loading';

interface AppContextProps {
  progress: PageType;
  setProgress: (val: PageType) => void;
  notification: string;
  setNotification: (val: string) => void;
  showAlert: boolean;
  setShowAlert: (val: boolean) => void;
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
  const [progress, setProgress] = useState<PageType>('login');
  const [notification, setNotification] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const contextValue = {
    progress,
    setProgress,
    notification,
    setNotification,
    showAlert,
    setShowAlert,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
