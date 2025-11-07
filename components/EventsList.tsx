import { useEvents } from "@/hooks/useEvents";
import { ScrollView, View } from "react-native";
import CreateEventButton from "./CreateEventButton";
import EventCard from "./EventCard";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";

export default function EventsList() {
  const { isPending, isError, data: events = [], error } = useEvents();

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
      {isPending && <Text>Cargando...</Text>}
      <ScrollView style={{ flex: 1, flexDirection: "column", gap: 2 }}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollView>
    </View>
  );
}
