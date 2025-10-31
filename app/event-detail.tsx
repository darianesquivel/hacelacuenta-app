import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { View } from "react-native";

export default function EventDetail() {
  return (
    <View>
      <Link href={"/"} className="mt-10">
        Ir atras
      </Link>
      <Text>Details</Text>
    </View>
  );
}
