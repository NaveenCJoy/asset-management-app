import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";

import Home from "./src/screens/app/Home";
import Favourites from "./src/screens/app/Favourites";
import Profile from "./src/screens/app/Profile";

import Splash from "./src/screens/auth/Splash";
import SignUp from "./src/screens/auth/SignUp";
import SignIn from "./src/screens/auth/SignIn";
import { colors } from "./src/utils/colors";
import AssetsList from "./src/screens/app/AssetsList";
import AssetDetails from "./src/screens/app/AssetDetails";

import { isSignedIn } from "./src/atoms";
import { atom, useAtom } from "jotai";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Home") {
            icon = focused
              ? require("./src/assets/tabs/home_active.png")
              : require("./src/assets/tabs/home.png");
          } else if (route.name === "Profile") {
            icon = focused
              ? require("./src/assets/tabs/profile_active.png")
              : require("./src/assets/tabs/profile.png");
          } else if (route.name === "Favourites") {
            icon = focused
              ? require("./src/assets/tabs/add_active.png")
              : require("./src/assets/tabs/add_inactive.png");
          }

          // You can return any component that you like here!
          return <Image source={icon} style={{ height: 24, width: 24 }} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: colors.grey,
          backgroundColor: colors.white,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [signedIn, setSignedIn] = useAtom(isSignedIn);
  // const isSignedIn = true;
  // const signedIn = true;

  const theme = {
    colors: {
      background: colors.white,
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {signedIn ? (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="assets"
                component={AssetsList}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="assetdetails"
                component={AssetDetails}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="home"
                component={Splash}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="signin"
                component={SignIn}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="signup"
                component={SignUp}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 30,
  },
  smallText: {
    fontSize: 20,
  },
});
