// import React from 'react'

// const UserContext = React.createContext()

// export const UserProvider = UserContext.Provider
// export const UserConsumer = UserContext.Consumer

// export default UserContext


import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState('blue');

  const toggleTheme = (color) => {
    setThemeColor(color);
  };

  return (
    <ThemeContext.Provider value={{ themeColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
