import { Text, View, StyleSheet, Button } from 'react-native';

const PageB = ({navigation}) => {
  return(
  <View>
  <Text> JeanMichel </Text>
  <Button title="Retour" onPress={() => navigation.navigate('MonComposant')} />
  </View>
  );
}

export default PageB;