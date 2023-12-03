import React, { useState } from "react";
import { Linking, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import DropdownComponent from "../../../components/DropdownComponent";
import Button from "../../../components/Button";
// import DocumentPicker from "react-native-document-picker";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { v4 as uuidv4 } from "uuid";

const assetConditionData = [
  { label: "Working", value: "1" },
  { label: "Not Working", value: "2" },
];

const warrantyStatusData = [
  { label: "Not Expired", value: "1" },
  { label: "Expired", value: "2" },
];

const Favourites = ({ navigation }) => {
  const [assetCondition, setAssetCondition] = useState(null);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [confirmScreen, setConfirmScreen] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });

    if (!result.canceled) {
      const fileName = result.assets[0].uri.split(".").pop();
      const randomFileName = uuidv4().slice(0, 15) + "." + fileName;

      setImage({ uri: result.assets[0].uri, name: randomFileName });
    }
  };

  const handleDoneClick = () => {
    navigation.navigate("Home");
    setConfirmScreen(false);
    setImage(null);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {confirmScreen ? (
          <>
            <View style={styles.confirmContainer}>
              <Text style={styles.confirmText}>
                Your Asset will be added soon...!
              </Text>
            </View>
            <Button title="Done" onClick={handleDoneClick} />
          </>
        ) : (
          <>
            <Header title="Add New Asset" showBack />
            <View style={{ marginTop: 20 }}>
              <Input label="Title" placeholder="Asset Name" />
              <Input label="Purchase Value" placeholder="$" />
              <Input label="Current Value" placeholder="$" />
              <DropdownComponent
                placeholder="Asset Condition"
                data={assetConditionData}
                onValueChange={(item) => {
                  setAssetCondition(item);
                }}
              />
              <DropdownComponent
                placeholder="Warranty Status"
                data={warrantyStatusData}
                onValueChange={(item) => {
                  setAssetCondition(item);
                }}
              />
              <Button
                title={image ? image.name : "Upload file"}
                uploadIcon
                onClick={pickImage}
              />
              <Button title="Submit" onClick={() => setConfirmScreen(true)} />
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Favourites;
