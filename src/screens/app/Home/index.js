import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { styles } from "./styles";
import DropdownComponent from "../../../components/DropdownComponent";
import Button from "../../../components/Button";
import AssetsList from "../AssetsList";

const locationData = [
  { label: "Kochi - SOE", value: "1" },
  { label: "Kuttanad - Cucek", value: "2" },
];

const sectionDataKochi = [
  { label: "C Section", value: "1" },
  { label: "NLB", value: "2" },
];

const sectionDataKuttanad = [
  { label: "Placement Hall", value: "1" },
  { label: "Principal Office", value: "2" },
];

const Home = ({ navigation }) => {
  const [locationValue, setLocationValue] = useState(null);

  const handleViewAssets = () => {
    console.log("view assets");
    navigation.navigate("assets");
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          showSearch={true}
          title="Manage Your Assets"
          showLogout={true}
        />
        <DropdownComponent
          placeholder="Select Location"
          data={locationData}
          onValueChange={(value) => {
            console.log(value);
            setLocationValue(value);
          }}
        />
        <DropdownComponent
          placeholder="Select Section"
          data={
            locationValue === "Kochi - SOE"
              ? sectionDataKochi
              : sectionDataKuttanad
          }
          onValueChange={(value) => console.log(value)}
        />
        <Button title="View assets" onClick={handleViewAssets} />
        <Button title="Create new Asset" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
