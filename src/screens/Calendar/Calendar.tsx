import { LayoutWrapper, TextComp } from "../../components";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./Calendar.styles";
import { LinearGradient } from "expo-linear-gradient";
import CalendarPicker from "react-native-calendar-picker";
import { useNavigation } from "@react-navigation/native";
import { useAppState } from "../../context/AppStateContext";

const Calendar = () => {
  const { state, dispatch } = useAppState();
  const navigation = useNavigation();
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const minDate = new Date(); // Today
  const maxDate = new Date(2024, 6, 3);

  const onDateChange = (date: any, type: string) => {
    if (type === "END_DATE") {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date), setSelectedEndDate(null);
    }
  };

  const onPressSelectDate = () => {
    dispatch({ type: "START_DATE", payload: selectedStartDate });
    dispatch({ type: "END_DATE", payload: selectedEndDate });

    navigation.navigate("NewRequest");
  };

  return (
    <LayoutWrapper>
      <View style={styles.container}>
        <TextComp size={22} color="#000" style={styles.titleTxt}>
          New Request
        </TextComp>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#ffd097"
          selectedDayColor="#f3a94d"
          selectedDayTextColor="#FFFFFF"
          onDateChange={onDateChange}
        />
        <TouchableOpacity
          onPress={onPressSelectDate}
          disabled={(selectedStartDate && selectedEndDate) === null}
        >
          <LinearGradient
            colors={["#f9c85f", "#f4b053", "#f3a94d"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradientButton}
          >
            <TextComp size={18} color="#FFF" style={{ fontWeight: "600" }}>
              Select
            </TextComp>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LayoutWrapper>
  );
};

export default Calendar;
