import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { styles } from './styles';
import MainContainer from './components/MainContanier';

const App = () => {
  console.log(useDeviceOrientation());
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <MainContainer />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

