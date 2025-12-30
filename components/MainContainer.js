import { Text, View, Image } from 'react-native';
import { styles } from '../styles';
import { useDeviceOrientation } from '@react-native-community/hooks';


const MainContainer = () => {
  const orientation = useDeviceOrientation(); // "portrait" or "landscape"
  const isLandscape = orientation === 'landscape';

  return (
    <View style={[
      styles.container,
      styles.shadowBox,
      isLandscape ? styles.containerLandscape : styles.containerPortrait
    ]}>
      <Image
        source={require('../assets/profil-bild.jpeg')}
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
        }}
      />

      <Image
        source={require('../assets/todd.jpg')}
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
        }}
      />
    </View>
  )
}

export default MainContainer;