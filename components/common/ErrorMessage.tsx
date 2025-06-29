import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

type ErrorMessageProps = {
  message: string;
  visible: boolean;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, visible }) => {
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(-30);

  useEffect(() => {
    if (visible) {
      opacity.value = withTiming(1, {
        duration: 500,
        easing: Easing.out(Easing.ease),
      });
      translateX.value = withTiming(0, {
        duration: 500,
        easing: Easing.out(Easing.ease),
      });
    } else {
      opacity.value = withTiming(0, { duration: 300 });
      translateX.value = withTiming(-30, { duration: 300 });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.errorText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffdddd",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  errorText: {
    color: "#b00020",
    fontSize: 14,
  },
});

export default ErrorMessage;
