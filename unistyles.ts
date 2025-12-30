const lightTheme = {
  colors: {
    primary: '#007AFF',
    background: '#fff',
    text: '#000',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

const darkTheme = {
  colors: {
    primary: '#0A84FF',
    background: '#000',
    text: '#fff',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

declare module 'react-native-unistyles' {
  export namespace UnistylesTheme {
    export type Themes = AppThemes;
  }
}
