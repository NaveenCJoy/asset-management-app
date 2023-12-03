import React from "react";
import { Linking, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import { styles } from "./styles";

const Profile = () => {
  const onLogout = () => {
    console.log("logged out");
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header showLogout onLogout={onLogout} title="Profile" />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
        <ListItem
          title="Contact Us"
          subtitle="Call us"
          onPress={() => {
            Linking.openURL("tel: 9539750325");
          }}
        />
        <ListItem
          title="Help & Support"
          subtitle="Send mail to custommer care"
          onPress={() => {
            Linking.openURL("mailto: naveenjoy18@gmail.com");
          }}
        />
        <ListItem
          title="Report bugs"
          subtitle="Report issues in app to the developer"
          onPress={() => {
            Linking.openURL("mailto: naveenjoy18@gmail.com");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
