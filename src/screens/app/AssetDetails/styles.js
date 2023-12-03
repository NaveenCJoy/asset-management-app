import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    // padding: 24,
  },
  image: {
    width: "100%",
    height: height * 0.5,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: "400",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  backContainer: {
    backgroundColor: colors.white,
    padding: 8,
    margin: 24,
    position: "absolute",
    borderRadius: 30,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
});
