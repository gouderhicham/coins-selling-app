import { Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { icons } from "../assets/icons";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const TabBarButton = (props) => {
  const { isFocused, label, routeName, color } = props;
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withTiming(isFocused ? 1 : 0, {
      duration: 200,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);

    return {
      // styles
      transform: [{ scale: scaleValue }],
      top,
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity,
    };
  });
  return (
    <Pressable {...props} style={styles.container} hitSlop={20}>
      <Animated.View style={[animatedIconStyle]}>
        {icons[routeName]({
          color,
        })}
      </Animated.View>

      <Animated.Text
        style={[
          {
            color,
            fontSize: 11,
          },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});

export default TabBarButton;
