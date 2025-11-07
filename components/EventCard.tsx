import { Event } from "@/api/events";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { Card } from "./ui/card";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const { id, name, description } = event;

  return (
    <Link href={`/${id}`} asChild>
      <Pressable>
        <Card size="md" className="m-0.5 rounded-xl bg-slate-800">
          <Heading size="md" className="mb-1">
            {name}
          </Heading>
          <Text>{description}</Text>
        </Card>
      </Pressable>
    </Link>
  );
}
