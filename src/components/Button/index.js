import React from "react";
import { Pressable, View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const Button = ({ title, onClick, uploadIcon }) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.container,
          uploadIcon
            ? { flexDirection: "row", justifyContent: "space-around" }
            : null,
        ]}
        activeOpacity={0.6}
        onPress={onClick}
      >
        <Text style={styles.title}>{title}</Text>
        {uploadIcon ? (
          <Image
            source={require("../../assets/upload.png")}
            style={{ width: 20, height: 20 }}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Button);
