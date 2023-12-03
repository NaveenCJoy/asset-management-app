import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Button from "../../../components/Button";

const AssetDetails = ({ navigation, route }) => {
  // console.log("navigation", navigation);
  console.log("route", route);
  const { product } = route?.params || {};
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: product?.image }} />
        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <View style={[styles.priceContainer, { marginTop: 20 }]}>
            <Text>Purchase Price : </Text>
            <Text>{product?.price}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text>Current Price : </Text>
            <Text>{product?.price}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text>Status : </Text>
            <Text style={{ textTransform: "capitalize" }}>
              {product.status ? product.status : "down"}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text>Warranty Status : </Text>
            <Text style={{ textTransform: "capitalize" }}>
              {product.status ? product.status : "expired"}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text>Asset Location : </Text>
            <Text style={{ textTransform: "capitalize" }}>
              {product.status ? product.status : "down"}
            </Text>
          </View>
        </View>
        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image
            source={require("../../../assets/assetImages/back.png")}
            style={styles.backIcon}
          />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Button title="Edit" />
        <Button title="Delete" />
      </View>
    </SafeAreaView>
  );
};

export default AssetDetails;
