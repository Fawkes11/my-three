import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";

const Main = ({children, router}) => {
return (
    <Box as="main" pb={8} >
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/> 
            <title>Hessler Inampuez - ThreeJs project</title>

        </Head>
        <Container maxW="container.md" pt={12}>
            {children}
        </Container>
    </Box>
)
}

export default Main;
