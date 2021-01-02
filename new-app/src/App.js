import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

const lightTheme = {
  background: 'red',
  backgroundAlt: 'blue',
  text: 'orange',
  border: 'purple',
  shadow: '0 0 5px rgba(0, 0, 0, .5)',
};

const darkTheme = {
  background: '#dcdcdc',
  backgroundAlt: '#fdfdfd',
  text: '#333',
  border: '#dcdcdc',
  shadow: '0 0 5px rgba(0, 0, 0, .5)',
};

const App = () => {
  const [theme, updateTheme] = useState(lightTheme);

  const handleDarkMode = () => {
    updateTheme(value: oldTheme => {
      if(oldTheme.background == 'red') {
        return lightTheme;
      }

      return darkTheme;
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
