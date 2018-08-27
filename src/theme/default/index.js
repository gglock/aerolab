const theme = {
  breakpoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  borderradius: {
    xs: '2px',
    sm: '4px',
    md: '6px'
  },
  typography: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: '0.875rem',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    common: {
      black: "#000",
      white: "#fff"
    },
    title: {
      fontSize: '1.3125rem',
      fontWeight: 400,
      lineHeight: '1.16667em'
    },
    subheading: {
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: '1.5em'
    },
    display1: {
      fontSize: '0.875rem',
      fontWeight: 300
    },
    display2: {
      fontSize: '1.2rem',
      fontWeight: 400
    },
    display3: {
      fontSize: '1.5rem',
      fontWeight: 400
    },
    display4: {
      fontSize: '2rem',
      fontWeight: 600
    },
    display5: {
      fontSize: '3rem',
      fontWeight: 600
    },
    body: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.46429em',
      color: '#616161'
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: '1.375em',
      color: '#a3a3a3'
    }
  },
  palette: {
    background: {
      default: "#ffffff",
      body: "#f9f9f9",
    },
    grey: {
      light: '#fafafa',
      main: '#eeeeee',
      dark: '#929292'
    },
    text: {
      primary: '#616161',
      secondary: '#a3a3a3'
    },
    primary: {
      light: '#2cdeff',
      main: '#0ad4fa',
      dark: '#11abc7',
      contrastText: '#fff'
    },
    secondary: {
      light: '#f5f2f2',
      main: '#ededed',
      dark: '#c1c1c1',
      contrastText: '#a3a3a3'
    },
    alpha: {
      black: "rgba(0,0,0,.5)"
    }
  },
  shadows: [
    "none", "2px 2px 4px 0 rgba(0,0,0,0.10)"
  ],
  transitions: {
    easing: {
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)"
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
    }
  },
  spacing: {
    unit: 8
  }
};

export default theme;
