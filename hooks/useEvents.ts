import { Event, getEventById, getEvents } from "@/api/events";
import { useQuery } from "@tanstack/react-query";

export function useEvents() {
  return useQuery<Event[], Error>({
    queryKey: ["events"],
    queryFn: () => getEvents(),
  });
}

export function useEvent(eventId: string | undefined) {
  console.log("useEvent => eventId", eventId);
  return useQuery<Event, Error>({
    queryKey: ["event", eventId],
    queryFn: () => getEventById(eventId!),
    enabled: !!eventId,
  });
}
