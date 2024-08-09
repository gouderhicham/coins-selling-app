import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Easing,
  View,
} from "react-native";

const AnimatedButton = () => {
  const [scaleValue] = useState(new Animated.Value(1)); // initial scale value

  // Interpolating scaleValue to control background color
  const backgroundColor = scaleValue.interpolate({
    inputRange: [0.8, 1],
    outputRange: ["hsl(0, 0%, 0%)", "hsl(0, 0%, 100%)"], // adjust color range as needed
  });

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.8, // scale down when pressed
      duration: 100, // duration of the press-in animation
      easing: Easing.out(Easing.ease), // ease-out effect
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1, // scale back to original size
      duration: 300, // duration of the release animation
      easing: Easing.out(Easing.ease), // ease-out effect
      useNativeDriver: true,
    }).start();
  };
  const animatedStyle = {
    transform: [{ scale: scaleValue }],
    backgroundColor,
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1} // keeps the opacity unchanged when pressed
      >
        <Animated.View style={[styles.button, animatedStyle]}>
          <Text style={styles.buttonText}>Press Me</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: "pink",
    fontSize: 16,
    textAlign: "center",
  },
});

export default AnimatedButton;
