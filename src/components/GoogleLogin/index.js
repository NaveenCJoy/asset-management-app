import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const GoogleLogin = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <TouchableOpacity activeOpacity={0.6} style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/google.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GoogleLogin;
