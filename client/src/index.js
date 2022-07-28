import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from "react-redux";
import store from "./redux/store";





const theme = createTheme({
  palette: {
    primary: {
      main: '#002856',
    },
    secondary: {
      main: '#f3e5f5',
    },
    error: {
      main: '#e57373',
    },
    warning: {
      main: '#ffb74d',
    },
    info: {
      main: '#4fc3f7',
    },
    success: {
      main: '#aacd4f',
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          // apply theme's border-radius instead of component's default
          borderRadius: 4,
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: "6rem",
    },
    h2: {
      fontSize: "3.75rem",
    },
    h3: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "2.125rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 700,
      fontSize: "1.3rem",
      '@media (min-width: 320px)': {
        fontSize: '14px',
      },
      '@media (min-width: 425px)': {
        fontSize: '1.3rem',
      },
    },
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {},
    caption: {},
    overline: {},
  },
  spacing: 10,
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
