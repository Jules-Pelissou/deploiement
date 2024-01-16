import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const PageA = ({navigation}) => {
  return(
  <View>
  <Text> L'énorme classique </Text>
  <Button title="Retour" onPress={() => navigation.navigate('MonComposant')} />
  </View>
  );
}

export default PageA;