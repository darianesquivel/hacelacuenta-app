import { events } from "@/constants/events";
import { ScrollView, View } from "react-native";
import CreateEventButton from "./CreateEventButton";
import EventCard from "./EventCard";
import { Heading } from "./ui/heading";

export default function EventsList() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Heading>Mis eventos</Heading>
        <CreateEventButton />
      </View>
      <ScrollView style={{ flex: 1, flexDirection: "column", gap: 2 }}>
        {events.map((e) => (
          <EventCard key={e.name} name={e.name} description={e.description} />
        ))}
      </ScrollView>
    </View>
  );
}
