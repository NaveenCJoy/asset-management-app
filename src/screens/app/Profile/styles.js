import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 12,
  },
  email: {
    fontSize: 20,
    fontWeight: "400",
    color: colors.grey,
  },
});
