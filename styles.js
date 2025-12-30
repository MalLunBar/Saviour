import { StyleSheet } from 'react-native';
import { currentTheme } from './theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: currentTheme.colors.background,
    padding: currentTheme.spacing.md,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: currentTheme.colors.text,
    marginBottom: currentTheme.spacing.lg,
  },
  container: {
    flex: 1,
    backgroundColor: currentTheme.colors.primary,
    borderRadius: 8,

  },
});
