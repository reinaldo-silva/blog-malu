import { createContext, ReactNode, useContext } from 'react';

export interface AppContextData {}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextData => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

export { AppProvider };
