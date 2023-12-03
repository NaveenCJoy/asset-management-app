import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const cardStyles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    paddingVertical: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  title: {
    color: colors.grey,
    paddingVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  price: {
    color: colors.black,
    paddingBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  content: {
    flex: 1,
  },
});
