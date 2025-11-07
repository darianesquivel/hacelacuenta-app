import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from "@/components/ui/modal";
import { useState } from "react";
import { Pressable } from "react-native";
import { PlusIcon } from "./Icons";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";

export default function CreateEventButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button>
        <ButtonText onPress={() => setShowModal(true)}>Crear evento</ButtonText>
        <ButtonIcon as={PlusIcon} size="sm" />
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="full"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader className="gap-2 items-start">
            <VStack className="gap-1">
              <Heading size="md" className="text-typography-950">
                Invite your team
              </Heading>
              <Text size="sm" className="text-typography-500">
                You have created a new project! Invite colleagues to collaborate
                on this project.
              </Text>
            </VStack>
            <ModalCloseButton>
              {/* <Icon as={CloseIcon} className="stroke-background-500" /> */}
              <Text>Cerrar</Text>
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody
            className="mb-0"
            contentContainerClassName="gap-4 space-between flex-row items-center"
          >
            {/* <Input variant="outline" size="sm" className="flex-1">
            <InputField placeholder="join.untitledui.com/personalproject" />
          </Input> */}
            <Pressable className="h-9 w-9 justify-center items-center border border-outline-300 rounded">
              {/* <Icon as={CopyIcon} className="stroke-background-800" /> */}
            </Pressable>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
