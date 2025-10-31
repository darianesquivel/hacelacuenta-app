import { useState } from "react";
import { Pressable } from "react-native";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from "./ui/actionsheet";
import { Button, ButtonText } from "./ui/button";
import { Card } from "./ui/card";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";

interface EventCardProps {
  name: string;
  description: string;
}

export default function EventCard({ name, description }: EventCardProps) {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleOpen = () => setShowActionsheet(true);
  const handleClose = () => setShowActionsheet(false);

  return (
    <>
      <Pressable key={name} onPress={handleOpen}>
        <Card size="md" className="m-0.5 rounded-xl">
          <Heading size="md" className="mb-1">
            {name}
          </Heading>
          <Text>{description}</Text>
        </Card>
      </Pressable>
      <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>Open Actionsheet</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop onPress={handleClose} />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>DETALLE</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
