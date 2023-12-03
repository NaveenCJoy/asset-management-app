import React, { useState } from "react";
import { Image, Pressable, View, Text } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../Input/index";

const Header = ({
  title,
  onBackPress,
  onSearch,
  onLogout,
  showLogout,
  showSearch,
  showBack,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const onSearchClick = () => {
    setShowSearchInput((prev) => !prev);
  };
  return (
    <View>
      <View style={styles.container}>
        {showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image
              source={require("../../assets/back.png")}
              style={styles.icon}
            />
          </Pressable>
        ) : showSearch ? (
          <Pressable hitSlop={20} onPress={onSearchClick}>
            <Image
              source={require("../../assets/search.png")}
              style={styles.icon}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
        <Text style={styles.title}>{title}</Text>
        {showLogout ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image
              source={require("../../assets/logout.png")}
              style={styles.icon}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>

      {showSearchInput ? <Input placeholder="Search" /> : null}
    </View>
  );
};

export default Header;
