import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import UserAvatar from "./UserAvatar";

export default function Header() {
  return (
    <View style={styles.container}>
      <UserAvatar />
      <Pressable onPress={() => console.log("MENU")}>
        <Ionicons name="ellipsis-vertical" size={24} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#231f20",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
