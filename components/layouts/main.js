import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import OldPC from '../old-pc'
import NoSsr from '../no-ssr'

const Main = ({children , router}) => {
    return(
        <>
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Homeapage </title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <OldPC/>
                </NoSsr>
                {children}
            </Container>
        </Box>
        </>
    )
} 

export default Main