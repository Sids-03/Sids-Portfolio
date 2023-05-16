import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Sid-Hub">
      <Container>
        <Title>
          Sid-Hub <Badge>2022-</Badge>
        </Title>
        <P>
            Social networking site that helps us to connect and share with family and friends online.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.google.com/">
              to host <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, MongoDB</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/sidhub.png" alt="" />
      </Container>
    </Layout>
  )
  
  export default Work