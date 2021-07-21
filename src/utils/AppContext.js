import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <AppContext.Provider
      value={{
        ...state,
        setIsAuthorized: (isAuth) => setState({ ...state, isAuth }),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
