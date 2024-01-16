import { Text, View,StyleSheet, Image } from 'react-native';

const ImagePerso = () => {
  return (
      <Image style={styles.logo} source={require('../assets/FrancisLaLANE.jpg')} />
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 350,
    width: 400,
  }
});

export default ImagePerso;