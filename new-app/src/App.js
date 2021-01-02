import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeContext from './contexts/Theme';


import Home from './pages/Home';


const lightTheme = {
  background: '#dcdcdc',
  backgroundAlt: '#fdfdfd',
  text: '#333',
  border: '#dcdcdc',
  shadow: '0 0 5px rgba(0, 0, 0, .5)',
};

const darkTheme = {
  background: '#595959',
  backgroundAlt: '#333',
  text: '#f2f2f2',
  border: '#f2f2f2',
  shadow: '0 0 5px rgba(255, 255, 255, .5)',
};


const App = () => {
  const [theme, updateTheme] = useState(lightTheme);

  const handleSwitchTheme = () => {
    updateTheme(oldTheme => {
      if(oldTheme.background === '#595959') {
        return lightTheme;
      }

      return darkTheme;
    })
  }

  return (
    <ThemeContext.Provider value={{
      switchTheme: handleSwitchTheme,
    }}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ThemeContext.Provider>
    
  );
}

export default App;
