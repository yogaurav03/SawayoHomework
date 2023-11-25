import React, { ReactNode } from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";

interface LayoutWrapperProps {
  children: ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://media.licdn.com/dms/image/D4D03AQH18HbMT27Hyw/profile-displayphoto-shrink_800_800/0/1683383888371?e=1706140800&v=beta&t=ZU2C1mlxI3JvHMk9KOeKGPIM11_KVxqnyXIpc--cmNg",
        }}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#f9cd62",
  },
  imageStyle: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: "center",
    borderWidth: 10,
    borderColor: "#f9cd62",
    marginBottom: -20,
    zIndex: 1,
  },
});

export default LayoutWrapper;
