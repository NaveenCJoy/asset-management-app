import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  agreeText: {
    marginHorizontal: 8,
    color: colors.blue,
  },
  button: {
    marginVertical: 80,
  },
});
