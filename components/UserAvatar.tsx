import { Pressable } from "react-native";
import { Avatar, AvatarFallbackText, AvatarImage } from "./ui/avatar";

export default function UserAvatar() {
  return (
    <Pressable onPress={() => console.log("AVATAR")}>
      {/* <HStack space="md"> */}
      <Avatar>
        <AvatarFallbackText>SS</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: "https://media.licdn.com/dms/image/v2/D4D03AQHMZgZlz9XqTA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690333565786?e=1763596800&v=beta&t=xjX18-Zc9i4ZeFGLuGamf-7qtdc44BIChIBjVuDVTsg",
          }}
        />
      </Avatar>
      {/* <VStack>
          <Heading size="sm">Darian Esquivel</Heading>
          <Text size="sm">Frontend Dev.</Text>
        </VStack>
      </HStack> */}
    </Pressable>
  );
}
