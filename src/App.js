import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Splash from "./screens/auth/Splash";
import SignUp from "./screens/auth/SignUp";

export default function App() {
  const [isBig, setIsBig] = useState(false);
  const changeState = () => {
    setIsBig(!isBig);
  };
  return (
    // <View style={styles.container}>
    <SafeAreaView>
      {/* <Splash /> */}
      <SignUp />
    </SafeAreaView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 30,
  },
  smallText: {
    fontSize: 20,
  },
});
