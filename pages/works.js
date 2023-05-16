import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSid from '../public/images/works/sidhub.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="sidhub" title="Sid-Hub" thumbnail={thumbSid}>
            Social networking site that helps us to connect and share with family and friends online.
          </WorkGridItem>
        </Section>       
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
