import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const MonComposant = ({navigation}) => {

const [texte, setTexte] = useState("Bienvenue dans l'un de mes composants React Native !");

 return (
 <View style={styles.container}>
 <Text>{texte}</Text>
 <Button title="Aller vers Page A" onPress={() => navigation.navigate('PageA')} />
 <Button title="Aller vers Page B" onPress={() => navigation.navigate('PageB')} />
  <Button title="Catégories" onPress={() => navigation.navigate('Categories')} />
  <Button
  title = "Changer le texte"
  onPress={() => ChangeTexte()}
  />
 </View>
 );


function ChangeTexte(){
  setTexte("Le texte est changé")
}

};



const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    fontSize : 50,
    fontWeight : 'bold',
    color : 'red'
  }
})

export default MonComposant;