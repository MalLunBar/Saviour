import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import MainContainer from './components/MainContainer';

const App = () => {

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

