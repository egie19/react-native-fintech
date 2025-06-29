import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  BackHandler,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
  runOnJS,
} from "react-native-reanimated";
import React, { useCallback, useEffect } from "react";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { router, useFocusEffect } from "expo-router";
import { Feather, FontAwesome } from "@expo/vector-icons";
import ErrorMessage from "@/components/common/ErrorMessage";
import { useSigninReducer } from "@/hooks/useSigninReducer";
import { useClerkSignIn } from "@/hooks/useClerkSignIn";

const { width, height } = Dimensions.get("window");

const EmailSignin = () => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const translateY = useSharedValue(height);
  const scaleBounce = useSharedValue(0.5); // Start smaller
  const opacityBounce = useSharedValue(0); // Optional: start transparent

  const { state, setUserName, setPassword, toggleSecurityTextEntry, validate } =
    useSigninReducer();

  const { handleEmailSignIn, loading, error } = useClerkSignIn();

  const onSignIn = async () => {
    const isValid = validate();
    if (isValid) {
      try {
        await handleEmailSignIn(state.username, state.password);
      } catch (error) {
        console.log("ERROR LOGIN::", error);
      }
    }
  };

  useEffect(() => {
    // Animate slide and spring container Signup view
    translateY.value = withSpring(0, {
      damping: 10,
      stiffness: 100,
    });
  }, []);

  useEffect(() => {
    // Trigger bounce-in effect
    scaleBounce.value = withSpring(1, {
      damping: 5,
      stiffness: 150,
    });

    opacityBounce.value = withTiming(1, { duration: 300 });
  }, []);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        translateY.value = withSpring(
          height,
          {
            damping: 15,
            stiffness: 120,
          },
          (isFinished) => {
            if (isFinished) {
              runOnJS(router.back)();
            }
          }
        );

        return true; // prevent default behavior
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => {
        subscription.remove(); // ✅ proper cleanup
      };
    }, [])
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const animatedBounceStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleBounce.value }],
    opacity: opacityBounce.value,
  }));

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back!</Text>
      </View>
      <Animated.View style={[styles.footer, animatedStyle]}>
        <Text style={[styles.text_footer, { backgroundColor: "#fff" }]}>
          Username
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            style={[styles.textInput]}
            autoCapitalize="none"
            value={state.username}
            onChangeText={setUserName}
          />
          {state.isValidUser && state.username !== "" ? (
            <Animated.View style={animatedBounceStyle}>
              <Feather name="check-circle" color={Colors.primary} size={20} />
            </Animated.View>
          ) : null}
        </View>
        {state.isValidUser ? null : (
          <ErrorMessage
            visible={!state.isValidUser}
            message="Invalid email address."
          />
        )}
        <Text
          style={[
            styles.text_footer,
            { backgroundColor: "#fff", marginTop: 35 },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" size={20} />
          <TextInput
            placeholderTextColor="#666666"
            secureTextEntry={state.secureTextEntry ? true : false}
            style={[styles.textInput]}
            autoCapitalize="none"
            value={state.password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={toggleSecurityTextEntry}>
            {state.secureTextEntry ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {state.isValidPassword ? null : (
          <ErrorMessage
            visible={!state.isValidPassword}
            message="Password must be 8 characters long."
          />
        )}
        <TouchableOpacity
          onPress={() => onSignIn()}
          style={[
            styles.signIn,
            {
              borderColor: Colors.primary,
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: Colors.primary,
              },
            ]}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </Animated.View>
      {loading && <ActivityIndicator style={styles.loading} />}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 15,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    gap: 10,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    paddingBottom: 5,
    color: "#05375a",
    borderBottomWidth: 0.2,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  input: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
});

export default EmailSignin;
