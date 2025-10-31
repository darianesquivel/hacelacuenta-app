import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { PlusIcon } from "./Icons";

export default function CreateEventButton() {
  return (
    <Button>
      <ButtonText>Crear evento</ButtonText>
      <ButtonIcon as={PlusIcon} size="sm" />
    </Button>
  );
}
