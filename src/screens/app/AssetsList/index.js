import React from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { cardStyles } from "./cardStyles";
import Header from "../../../components/Header";
import AssetCard from "./assetCard";
import { products } from "../../../data/products";

const AssetsList = ({ navigation }) => {
  const RenderItem = (props) => {
    const handleAssetCardClick = (product) => {
      navigation.navigate("assetdetails", { product });
    };
    return (
      <AssetCard
        title={props.title}
        price={props.price}
        image={props.image}
        AssetCardClick={() => handleAssetCardClick(props)}
        status={props.status}
      />
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          title="Your assets"
          showLogout
          showSearch
          showBack
          onBackPress={() => navigation.goBack()}
        />
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <RenderItem
              title={item.title}
              image={item.image}
              price={item.price}
              status={item.status}
              AssetCardClick={() => navigation.navigate("assetdetails")}
            />
          )}
          keyExtractor={(item) => String(item?.id)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AssetsList;
