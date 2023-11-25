import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 20,
  },
  titleTxt: {
    fontWeight: "500",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  horizontalLine: {
    backgroundColor: "#9d9999",
    height: 1,
    marginVertical: 20,
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  horizontalBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: 30,
    borderLeftColor: "#9d9999",
    borderRightColor: "#9d9999",
  },
});
