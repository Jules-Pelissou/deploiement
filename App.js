import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import MonComposant from './components/MonComposant';
import SecondComposant from './components/SecondComposant';
import PageA from './components/PageA';
import PageB from './components/PageB';
import Categories from './components/Categories';
import Articles from './components/Articles';
import AnimationComponent from './components/AnimationComponent'
import AdvancedAnimationComponent from './components/AdvancedAnimationComponent'
import Random from './components/Random'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Random" component={Random} />
          <Stack.Screen name="AnimationComponent" component={AnimationComponent} />
          <Stack.Screen name="AdvancedAnimationComponent" component={AdvancedAnimationComponent} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Articles" component={Articles} />
          <Stack.Screen name="MonComposant" component={MonComposant} />
          <Stack.Screen name="PageA" component={PageA} />
          <Stack.Screen name="PageB" component={PageB} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
