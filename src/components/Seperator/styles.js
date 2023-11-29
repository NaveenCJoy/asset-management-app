import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    color: colors.blue,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    marginHorizontal: 10,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
});
