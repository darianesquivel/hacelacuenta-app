import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <GluestackUIProvider mode="dark">
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          backgroundColor: "#231f20",
        }}
      >
        <Stack />
      </View>
    </GluestackUIProvider>
  );
}
