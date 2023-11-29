import React from "react";
import { Pressable, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = ({ title, onClick }) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.container]}
        activeOpacity={0.6}
        onPress={onClick}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Button);
