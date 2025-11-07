import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { CloseIcon, CopyIcon, Icon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from "@/components/ui/modal";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useState } from "react";

export function CreateEventButton() {
  const [showModal, setShowModal] = useState(false);
  const pointerEvents = showModal ? "auto" : "none";
  return (
    <>
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Crear evento</ButtonText>
      </Button>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          pointerEvents={pointerEvents}
        >
          <ModalBackdrop pointerEvents={pointerEvents} />
          <ModalContent className="max-w-[395px]">
            <ModalHeader className="gap-2 items-start">
              <VStack className="gap-1">
                <Heading size="md" className="text-typography-950">
                  Invite your team
                </Heading>
                <Text size="sm" className="text-typography-500">
                  You have created a new project! Invite colleagues to
                  collaborate on this project.
                </Text>
              </VStack>
              <ModalCloseButton>
                <Icon as={CloseIcon} className="stroke-background-500" />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody
              className="mb-0"
              contentContainerClassName="gap-4 space-between flex-row items-center"
            >
              <Input variant="outline" size="sm" className="flex-1">
                <InputField placeholder="join.untitledui.com/personalproject" />
              </Input>
              <Pressable className="h-9 w-9 justify-center items-center border border-outline-300 rounded">
                <Icon as={CopyIcon} className="stroke-background-800" />
              </Pressable>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
