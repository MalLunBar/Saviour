import { StyleSheet } from 'react-native';
import { currentTheme } from './theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: currentTheme.colors.background,
    padding: currentTheme.spacing.md,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: currentTheme.colors.text,
    marginBottom: currentTheme.spacing.lg,
  },
  container: {
    flex: 0.8,
    backgroundColor: currentTheme.colors.primary,
    borderRadius: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
