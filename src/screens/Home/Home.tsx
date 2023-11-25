import { LayoutWrapper, TextComp } from "../../components";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./Home.styles";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useAppState } from "../../context/AppStateContext";

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { state } = useAppState();
  const totalDays = 30;
  const usedDays = state?.usedDays;
  const totalAvailDays = totalDays - usedDays;
  return (
    <LayoutWrapper>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View>
            <TextComp size={22} color="#000" style={styles.titleTxt}>
              Gaurav Kumar
            </TextComp>
            <TextComp size={16} color="#9d9999">
              React Native Developer
            </TextComp>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("NewRequest")}>
            <AntDesign name="pluscircle" size={36} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.titleContainer}>
          <View style={styles.dayContainer}>
            <TextComp size={16} color="#9d9999">
              Available
            </TextComp>
            <TextComp size={14} color="#000" style={styles.titleTxt}>
              {totalAvailDays} days
            </TextComp>
          </View>
          <View style={[styles.dayContainer, styles.horizontalBorder]}>
            <TextComp size={16} color="#9d9999">
              All
            </TextComp>
            <TextComp size={14} color="#000" style={styles.titleTxt}>
              {totalDays} days
            </TextComp>
          </View>
          <View style={styles.dayContainer}>
            <TextComp size={16} color="#9d9999">
              Used
            </TextComp>
            <TextComp size={14} color="#000" style={styles.titleTxt}>
              {usedDays} days
            </TextComp>
          </View>
        </View>
      </View>
    </LayoutWrapper>
  );
};

export default Home;
