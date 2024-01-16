import {
  Animated,
  StyleSheet,
  Text,
  Easing,
  TouchableOpacity,
  View,
} from 'react-native';

const AdvancedAnimationComponent = () => {
  const cubeAnimatedValueX = new Animated.Value(0);
  const cubeAnimatedValueY = new Animated.Value(0);
  const cubeAnimatedColor = new Animated.Value(0);
  const cubeAnimatedRotation = new Animated.Value(0);

  const moveBall = () => {
    Animated.parallel([
      Animated.timing(cubeAnimatedValueX, {
        toValue: Math.random(),
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(cubeAnimatedValueY, {
        toValue: Math.random(),
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(cubeAnimatedColor, {
        toValue: Math.random(2),
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(cubeAnimatedRotation, {
        toValue: Math.random(),
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const xVal = cubeAnimatedValueX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 350],
  });

  const yVal = cubeAnimatedValueY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 550],
  });

  const backgroundColor = cubeAnimatedColor.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['rgb(0, 0, 255)', 'rgb(0,255,0)', 'rgb(255,0,0)'],
  });

  const rotation = cubeAnimatedRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
        translateX: xVal,
        rotateX : rotation,
        rotateY : rotation,
      },
    ],
    backgroundColor: backgroundColor,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={moveBall}>
        <Animated.View style={[styles.ball, animStyle]}></Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ball: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AdvancedAnimationComponent;
