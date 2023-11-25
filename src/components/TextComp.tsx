import React, { ReactNode } from "react";
import { Text, TextStyle } from "react-native";

interface TextCompProps {
  children: ReactNode;
  size?: number;
  color?: string;
  style?: TextStyle;
}

const TextComp: React.FC<TextCompProps> = ({
  children,
  size,
  color,
  style,
}) => {
  const textStyle: TextStyle = {
    fontSize: size || 14, // Default size is 14 if not provided
    color: color || "black", // Default color is black if not provided
    ...style, // Additional styles passed from props
  };

  return <Text style={textStyle}>{children}</Text>;
};

export default TextComp;
