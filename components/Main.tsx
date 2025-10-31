import { Link } from "expo-router";
import { View } from "react-native";
import EventsList from "./EventsList";
import Header from "./Header";

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Link href={"/event-detail"}>Ir al detalle</Link>
      <View style={{ flex: 1, padding: 10 }}>
        <EventsList />
      </View>
    </View>
  );
}
