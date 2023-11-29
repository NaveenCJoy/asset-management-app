import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";

const Splash = () => {
  const handlePress = () => {
    console.log("button clicked");
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../../assets/splashscreen.png")}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={[styles.title, styles.innerTitle]}>
          Asset Management App
        </Text>
      </View>

      <Button title="Sign Up" onClick={handlePress} />
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
