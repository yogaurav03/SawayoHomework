import { AbsenceComp, LayoutWrapper, TextComp } from "../../components";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./NewRequest.styles";
import { LinearGradient } from "expo-linear-gradient";
import { useAppState } from "../../context/AppStateContext";
import moment from "moment";

const NewRequest = () => {
  const { state, dispatch } = useAppState();
  const navigation = useNavigation();
  const [selectedAbsence, setSelectedAbsence] = React.useState<string | null>(
    null
  );

  const handleTextInputFocus = () => {
    navigation.navigate("Calendar");
  };

  const formattedStartDate = moment(state?.startDate).format("Do MMMM YYYY");
  const formattedEndDate = moment(state?.endDate).format("Do MMMM YYYY");

  const dateDifference = moment(state?.endDate).diff(
    moment(state?.startDate),
    "days"
  );

  // Function to handle selection of absence type
  const handleAbsenceSelect = (absenceType: string) => {
    setSelectedAbsence(absenceType);
  };

  const onPressConfirmRequest = () => {
    dispatch({ type: "USED_DAYS", payload: dateDifference + 1 });
    navigation.navigate("Home");
  };

  return (
    <LayoutWrapper>
      <View style={styles.container}>
        <TextComp size={22} color="#000" style={styles.titleTxt}>
          New Request
        </TextComp>
        <View>
          <View style={styles.absenceContainer}>
            <AbsenceComp
              absenceName="Annual"
              icon="sun"
              selected={selectedAbsence === "Annual"}
              onPress={() => handleAbsenceSelect("Annual")}
            />
            <AbsenceComp
              absenceName="Parential"
              icon="home"
              selected={selectedAbsence === "Parential"}
              onPress={() => handleAbsenceSelect("Parential")}
            />
          </View>
          <View style={styles.absenceContainer}>
            <AbsenceComp
              absenceName="Unpaid"
              icon="dollar-sign"
              selected={selectedAbsence === "Unpaid"}
              onPress={() => handleAbsenceSelect("Unpaid")}
            />
            <AbsenceComp
              absenceName="Special"
              icon="gift"
              selected={selectedAbsence === "Special"}
              onPress={() => handleAbsenceSelect("Special")}
            />
          </View>
        </View>
        <View style={styles.textInputContainer}>
          <TextComp size={18} color="#9d9999">
            From
          </TextComp>
          <TextInput
            onFocus={handleTextInputFocus}
            style={styles.textInputStyles}
            value={state?.startDate === null ? "" : formattedStartDate}
          />
          <TextComp size={18} color="#9d9999">
            To
          </TextComp>
          <TextInput
            onFocus={handleTextInputFocus}
            style={styles.textInputStyles}
            value={state?.endDate === null ? "" : formattedEndDate}
          />
        </View>
        <TouchableOpacity
          onPress={onPressConfirmRequest}
          disabled={(state?.startDate && state?.endDate) === null}
        >
          <LinearGradient
            colors={["#f9c85f", "#f4b053", "#f3a94d"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradientButton}
          >
            <TextComp size={18} color="#FFF" style={{ fontWeight: "600" }}>
              Confirm
            </TextComp>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LayoutWrapper>
  );
};

export default NewRequest;
