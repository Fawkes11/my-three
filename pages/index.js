import { Box, Container } from "@chakra-ui/react"



export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="blue.200" p={3} align="center">
          Welcome to my three by <a href="https://hessler.tech">Hessler</a>
      </Box>
    </Container>
  )
}
