import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(!checked);
    console.log("check button clicked");
  };
  const handleBackPress = () => {
    console.log("back pressed");
  };
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={handleBackPress} />
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword={true} label="Password" placeholder="*******" />
      <View style={styles.agreeContainer}>
        <Checkbox checked={checked} onCheck={handleCheck} />
        <Text style={styles.agreeText}>
          I agree with <Text style={{ fontWeight: "600" }}>Terms</Text> &
          <Text style={{ fontWeight: "600" }}> Privacy</Text>
        </Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button title="Sign Up" onClick={() => console.log("button clicked")} />
      </View>
      <View>
        <Seperator title="in" />
      </View>
      <GoogleLogin />
    </View>
  );
};

export default SignUp;
