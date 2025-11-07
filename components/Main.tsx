import { View } from "react-native";
import EventsList from "./EventsList";
import Header from "./Header";

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, padding: 10 }}>
        <EventsList />
      </View>
    </View>
  );
}
