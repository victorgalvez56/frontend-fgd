import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "native-base";
import { colors } from "../helpers/colors";
import { images } from "../assets/imgs/images";
const Home = () => {
  return (
    <Center w="100%">
      <HStack
        bg={colors.neutral.white}
        shadow={1}
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w={["100%"]}
      >
        <HStack alignItems="center">
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={<Icon as={""} name="favorite" size="sm" color="white" />}
          />
        </HStack>
      </HStack>
      <Box
        safeArea
        bg={colors.neutral.backGround}
        p="8"
        py="8"
        w="100%"
        h="100%"
      >
        <VStack space={3} mt="5">
          <HStack space={3} justifyContent="center">
            <Stack
              h={"300"}
              w="70%"
              rounded="md"
              shadow={3}
              alignItems={"flex-start"}
              borderRadius={10}
            >
              <Image
                source={images.banner}
                alt="Alternate Text"
                size="100%"
                resizeMode="cover"
                borderRadius={10}
              />
              <Box pt={16} px={16} position={"absolute"} alignItems={"center"}>
                <Text
                  fontSize={40}
                  fontWeight={"700"}
                  color={colors.text.first}
                >
                  Hola, Bienvenido
                </Text>
                <Text
                  mt={16}
                  position={"absolute"}
                  fontSize={16}
                  fontWeight={"600"}
                  color={colors.text.third}
                >
                  Get <Text color={colors.text.second}>FREE delivery</Text> on
                  every weekend.
                </Text>
                <Button
                  mt={16}
                  bg={colors.primary.first}
                  w={"50%"}
                  borderRadius={18}
                >
                  Check Menú
                </Button>
              </Box>
            </Stack>

            <Center h="40" w="30%" bg="primary.500" rounded="md" shadow={3} />
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Home;
