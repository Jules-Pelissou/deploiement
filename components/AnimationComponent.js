import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const AnimationComponent = () => {
  const ballAnimatedValueX = new Animated.Value(0);
  const ballAnimatedValueY = new Animated.Value(0);
  const ballAnimatedColor = new Animated.Value(0);

  const moveBall = () => {
    Animated.parallel([
      Animated.timing(ballAnimatedValueX, {
        toValue: Math.random(),
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(ballAnimatedValueY, {
        toValue: Math.random(),
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(ballAnimatedColor, {
        toValue: Math.random(2),
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const xVal = ballAnimatedValueX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 350],
  });

  const yVal = ballAnimatedValueY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 550],
  });

  const backgroundColor = ballAnimatedColor.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['rgb(0, 0, 255)', 'rgb(0,255,0)', 'rgb(255,0,0)'],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
        translateX: xVal,
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
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimationComponent;
