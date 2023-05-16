import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
const Posts = ( ) =>(
    <Layout title = "Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}> 
                <p> No Posts</p>
            </Section>
        </Container>
    </Layout>
)

export default Posts