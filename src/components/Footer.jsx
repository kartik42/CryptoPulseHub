import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import avatarSrc from "../assets/IMG20230101121439-modified (1).png"
//const  = "../src;

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            CryptoPulseHub is your ultimate destination for real-time
            cryptocurrency information. Stay up-to-date with the latest market
            trends, track your favorite coins, and discover new investment
            opportunities all in one place. Our user-friendly platform provides
            comprehensive data, personalized tools, and valuable insights to
            empower you on your crypto journey. Join us today and let
            CryptoPulseHub be your trusted companion in the world of
            cryptocurrencies.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
