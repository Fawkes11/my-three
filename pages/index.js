import { Box, Container } from "@chakra-ui/react";
import FirstThree from "../components/three/FirstThree";

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="blue.200" p={3} align="center">
        Welcome to my R3F by{" "}
        <a href="https://hessler.tech" target="_blank">
          Hessler
        </a>
      </Box>
      <Box
        w={[280, 480, 640]}
        h={[280, 480, 640]}
        mt={["40px", "60px", "100px"]}
        mb={["40px", "140px", "160px"]}
      >
        <FirstThree />
      </Box>
    </Container>
  );
}
