import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

const Input = ({ label, placeholder, isPassword, value, onChange }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const showPassword = () => {
    setPasswordVisible(!passwordVisible);
    console.log(passwordVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !passwordVisible}
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={onChange}
        />
        {isPassword && (
          <Pressable hitSlop={20} onPress={showPassword}>
            <Image
              source={
                passwordVisible
                  ? require("../../assets/eye.png")
                  : require("../../assets/eye_closed.png")
              }
              style={styles.image}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Input;
