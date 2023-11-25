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
    marginBottom: 30,
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
  absenceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInputContainer: {
    marginVertical: 30,
  },
  textInputStyles: {
    borderBottomWidth: 0.4,
    borderBottomColor: "#9d9999",
    marginVertical: 10,
    fontSize: 18,
  },
  gradientButton: {
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
});
