import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
    flexDirection: "row",
    alignItems: "center ",
    height: "fit",
  },
  image: {
    width: 24,
    height: 24,
    marginTop: 8,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: "500",
    paddingHorizontal: 16,
  },
});
