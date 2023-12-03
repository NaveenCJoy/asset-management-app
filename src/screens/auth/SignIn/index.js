import React from "react";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { isSignedIn } from "../../../atoms";
import { wrongCredentials } from "../../../atoms";
import { useAtom } from "jotai";

const SignIn = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [signedIn, setSignedIn] = useAtom(isSignedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrText, setShowErrText] = useAtom(wrongCredentials);

  const handleCheck = () => {
    setChecked(!checked);
    console.log("check button clicked");
  };

  const handleBackPress = () => {
    console.log("back pressed");
    navigation.goBack();
  };

  const handleSignUp = () => {
    console.log("click");
    navigation.navigate("signup");
  };

  const handleLogin = () => {
    if (email === "user1" && password === "test") {
      setShowErrText(false);
      setSignedIn(true);
    } else {
      console.log("Email and password are required.");
      setShowErrText(true);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader title="Sign In" onBackPress={handleBackPress} />
        <Input
          label="Email"
          placeholder="example@gmail.com"
          value={email} // Update the state variable with the input value
          onChange={(text) => {
            setEmail(text);
            console.log(text); // Updated value
          }}
        />
        <Input
          isPassword={true}
          label="Password"
          placeholder="*******"
          value={password} // Update the state variable with the input value
          onChange={(text) => {
            setPassword(text);
            console.log(text); // Updated value
          }}
        />

        <View style={{ marginVertical: 20 }}>
          <Button title="Sign In" onClick={handleLogin} />
        </View>
        <View>
          <Seperator title="in" />
        </View>
        <GoogleLogin />
        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text style={{ fontWeight: "500" }} onPress={handleSignUp}>
            Sign Up
          </Text>
        </Text>
        {showErrText ? (
          <Text style={{ textAlign: "center", marginTop: 35 }}>
            Email and Password do not match
          </Text>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
