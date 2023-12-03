import React from "react";
import { Pressable, Text, View, Image } from "react-native";
import { cardStyles } from "./cardStyles";

const AssetCard = ({ title, price, image, status, AssetCardClick }) => {
  return (
    <Pressable style={cardStyles.container} onPress={AssetCardClick}>
      <Image source={{ uri: image }} style={cardStyles.image} />

      <View style={cardStyles.content}>
        <Text style={cardStyles.title}>{title}</Text>
        <Text>{price}</Text>
      </View>
      <Image
        source={
          status === "working"
            ? require("../../../assets/assetImages/greenTick.png")
            : require("../../../assets/assetImages/redTick.png")
        }
        style={cardStyles.icon}
      />
    </Pressable>
  );
};

export default AssetCard;
