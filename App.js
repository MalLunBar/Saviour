import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useStyles, UnistylesRegistry } from 'react-native-unistyles';
import { themes } from './unistyles';
import { styles as appStyles } from './styles';

UnistylesRegistry.addThemes(themes).addConfig({
  initialTheme: 'light',
});

export default function App() {
  const { styles } = useStyles(appStyles);
  console.log("jag");

  let x = 5


  return (
    <View style={styles.container}>
      <Text>Hej Todd</Text>
      <StatusBar style="auto" />
    </View>
  );
}
