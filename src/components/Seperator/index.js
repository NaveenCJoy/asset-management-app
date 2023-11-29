import React from "react";
import { Pressable, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Seperator = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.title}>Or sign {title} with</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Seperator;
