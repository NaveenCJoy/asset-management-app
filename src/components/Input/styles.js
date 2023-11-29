import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    padding: 0,
    color: colors.blue,
    marginVertical: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  inputContainer: {
    color: colors.blue,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: colors.grey,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  image: {
    height: 32,
    width: 32,
    marginRight: 5,
  },
});
