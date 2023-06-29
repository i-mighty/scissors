import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  VStack,
  FormErrorMessage,
  Collapse,
  useDisclosure,
  HStack,
  Text,
  Link,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

//icons
import { BiLockAlt } from "react-icons/bi";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

export default function SimpleCard() {
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen: isOpenCollapse, onToggle: onToggleCollapse } =
    useDisclosure();
  const { isOpen: isOpenEmail, onToggle: onToggleEmail } = useDisclosure();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  useEffect(() => {
    async function loadData() {}
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async ({ email, password }: any) => {
    await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    router.reload();
  };

  if (user) {
    router.push("/home");
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={4} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Text fontSize={"sm"} textAlign={"center"}>
          Login with:
        </Text>
        <HStack spacing={10}>
          <Button colorScheme="blue" w="full" onClick={onToggleCollapse}>
            Google
          </Button>
          <Button colorScheme="blue" w="full" onClick={onToggleCollapse}>
            Apple
          </Button>
        </HStack>
        <Box position="relative" padding="5">
          <Divider />
          <AbsoluteCenter px="4" bg={useColorModeValue("gray.50", "gray.800")}>
            or
          </AbsoluteCenter>
        </Box>
        {/* <Collapse in={isOpenCollapse}> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl
              id="email"
              isInvalid={Boolean(router.query.error)}
              isRequired
            >
              <Input
                placeholder="Email address or username"
                type="email"
                {...register("username")}
              />
            </FormControl>
            <FormControl
              id="password"
              isRequired
              isInvalid={Boolean(router.query.error)}
            >
              <InputGroup>
                <Input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    _hover={{ bg: "transparent" }}
                    _active={{ bg: "transparent" }}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {router.query.error &&
                router.query.error === "CredentialsSignin" && (
                  <FormErrorMessage>Invalid credentials</FormErrorMessage>
                )}
            </FormControl>
            <Stack spacing={5}>
              <Stack direction={"row-reverse"} justify={"space-between"}>
                {/* <Checkbox>Remember me</Checkbox> */}
                <Link href="/auth/signup" color={"blue.400"}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                isLoading={isSubmitting}
                loadingText="Signing in..."
                bg={"blue.400"}
                color={"white"}
                type="submit"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </form>
        <Stack pt={6}>
          <Text align={"center"}>
            Don't have an account?{" "}
            <Link color={"blue.400"} href={"/auth/signup"}>
              Sign Up
            </Link>
          </Text>
        </Stack>
        {/* </Collapse> */}
      </Stack>
    </Flex>
  );
}
