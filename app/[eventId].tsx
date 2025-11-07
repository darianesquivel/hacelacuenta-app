import { Text } from "@/components/ui/text";
import { useEvent } from "@/hooks/useEvents";
import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function EventDetail() {
  const params = useLocalSearchParams();
  const rawId = params.eventId;
  const eventId = typeof rawId === "string" ? rawId : undefined;

  const { isPending, data: event, error } = useEvent(eventId);

  return (
    <View>
      <Link href={"/"} className="mt-10">
        Ir atras
      </Link>
      <View>
        {isPending && <Text>Cargando...</Text>}
        {error && <Text>Error</Text>}
        {event && (
          <View className="bg-red-600">
            <Text>{event.name}</Text>
            <Text>{event.description}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
