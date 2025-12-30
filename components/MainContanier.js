import { Text, View, Image } from 'react-native';
import { styles } from '../styles';

const MainContainer = () => {

  return (

    <View style={styles.container}>

      <Image
        source={require('../assets/profil-bild.jpeg')}
        style={{ width: 150, height: 150, alignSelf: 'center', borderRadius: 75 }}
      />

      <Image
        source={require('../assets/todd.jpg')}
        style={{ width: 150, height: 150, alignSelf: 'center', borderRadius: 75 }}
      />

    </View>
  )
}

export default MainContainer;