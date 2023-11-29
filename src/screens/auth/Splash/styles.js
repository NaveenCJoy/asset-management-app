import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
  },
  titleContainer: {
    marginVertical: 30,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  innerTitle: {
    color: colors.orange,
  },
  footerText: {
    color: colors.blue,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  },
});
