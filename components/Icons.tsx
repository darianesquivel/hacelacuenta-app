import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

type Props = {
  color?: string;
  size?: number;
  height?: number;
  width?: number;
  style?: any;
};

export function PlusIcon({ color, size, height, width, style }: Props) {
  const resolvedSize = size ?? height ?? width ?? 18;
  return (
    <AntDesign name="plus" color={color} size={resolvedSize} style={style} />
  );
}
