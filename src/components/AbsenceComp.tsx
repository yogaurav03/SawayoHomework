import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import TextComp from "./TextComp";
import { Feather } from "@expo/vector-icons";

interface AbsenceCompProps {
  absenceName: string;
  icon: any;
  selected: boolean;
  onPress: () => void;
}

const AbsenceComp: React.FC<AbsenceCompProps> = ({
  absenceName,
  icon,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.absenceContainer, selected && { backgroundColor: "#000" }]}
    >
      <View style={styles.iconStyle}>
        <Feather name={icon} size={26} color="orange" />
      </View>

      <TextComp size={16} color="#9d9999" style={{ fontWeight: "600" }}>
        {absenceName}
      </TextComp>
    </TouchableOpacity>
  );
};

export default AbsenceComp;

const styles = StyleSheet.create({
  absenceContainer: {
    padding: 15,
    backgroundColor: "#f3f2ee",
    borderRadius: 20,
    width: "48%",
    margin: 3,
  },
  iconStyle: {
    backgroundColor: "#FFF",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 10,
  },
});
