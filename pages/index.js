import {
  Link,
  Container,
  Box,
  Heading,
  useColorModeValue,
  Button,
  Image,
  ListItem,
  List,
  UnorderedList
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'






const Page = () => {
  return (
    <>
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('#BBB4AA', '#525254')}
          mb={6}
          p={3}
          align="center"
        >
          //To-do
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Siddhid Saha
            </Heading>
            <p> Competitive Programmer | Developer </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/sid.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            {' '}
            Hi, my name is Siddhid Saha and I am currently a second-year
            undergraduate studying Computer Science Engineering at NIT Silchar.
            I am passionate about problem solving and always strive to learn new
            things. My love for coding, especially competitive programming, has
            led me to work on various projects using a range of technologies
            such as HTML, CSS, JavaScript, Next.js , Node.js, etc. In my
            free time, I enjoy playing basketball, listening to music, and
            learning to play new instruments like the piano and guitar. Overall,
            I am a multifaceted individual with a strong desire to continuously
            improve my skills and knowledge.{' '}
          </Paragraph>
        <Box align = "center" my ={4}>
            <NextLink href="/works">
                <Button rightIcon ={<ChevronRightIcon/>} colorScheme="teal">
                    My Resume
                </Button>
            </NextLink>
        </Box>

        </Section>
        <Section delay ={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>2003</BioYear>
                Born in Assam, India.
            </BioSection>
            <BioSection>
                <BioYear>2019</BioYear>
                Completed my senior secondary education in 2019 from Delhi Public School, Guwahati with a percentage of 96.4%.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Completed my higher secondary education in 2021 from Sai Vikash Junior College, Guwahati with a percentage of 96.6%.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                I have joined National Institute of Technology, Silchar for my Computer Science undergraduate degree.
            </BioSection>
        </Section>

        <Section delay ={0.2}>
            <Heading as="h3" variant="section-title">
                Achievements
            </Heading>
            <UnorderedList>
                <ListItem>
                    Secured Global Rank 650 and India Rank 415 (17,500 participants) in Google Kick Start 2022 Round F.
                </ListItem>
                <ListItem>
                    Qualified for Round 2 of Facebook Meta Hacker Cup, 2022.      
                </ListItem>
                <ListItem>
                    Reached the expert rank on Codeforces, with a maximum rating of 1654.
                </ListItem>
                <ListItem>
                    Secured Global Rank 776 in Codeforces Round 842 (Div. 2).
                </ListItem>
                <ListItem>
                    Nibble Code Runner Up and secured 10th position in NITS Hacks 5.0
                </ListItem>

            </UnorderedList>
        </Section>
        
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Sids-03" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  Sids-03
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/SiddhidS" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  SiddhidS
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/_siddhid_s/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  _siddhid_s
                </Button>
              </Link>
            </ListItem>
            <ListItem >
              <Link href="https://codeforces.com/profile/sroid_03" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  // leftIcon = {<FootprintIcon />}
                >
                  sroid_03
                </Button>
              </Link>
            </ListItem>
          </List>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/posts"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              Popular posts
            </Button>
          </Box>
        </Section>
      </Container>
      </Layout>
    </>
  )
}

export default Page
