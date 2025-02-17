import {
  Box,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
  Link,
  Button,
} from '@chakra-ui/react'
import { Container } from '@/components/all'

export const Footer = () => {
  return (
    <Box bg='dark.600' color='dark.50' py={16}>
      <Container>
        <SimpleGrid
          gridTemplateColumns={{ base: '1fr', lg: '1fr 3fr' }}
          gap={16}
        >
          <VStack spacing={4}>
            <Image maxW='300px' src='/img/powered_by_iov.svg' />
            <Text>
              Rsk is the most secure smart contract network in the world and
              enables decentralized applications secured by the Bitcoin Network
              to empower people and improve the quality of life of millions.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
            <Box>
              <List spacing={2}>
                <ListItem>Whitepapers</ListItem>
                <ListItem ml={4}>
                  <Link href='https://rsk.co/Whitepapers/RSK_White_Paper-ORIGINAL.pdf'>
                    Original
                  </Link>
                </ListItem>
                <ListItem ml={4}>
                  <Link href='https://rsk.co/Whitepapers/RSK-White-Paper-Updated.pdf'>
                    Updated
                  </Link>
                </ListItem>
                <ListItem ml={4}>
                  <Link href='https://docs.rifos.org/rif-whitepaper-en.pdf'>
                    RIF
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href='https://www.rsk.co/development-roadmap'>
                    Roadmap
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href='https://explorer.rsk.co/'>Explorer</Link>
                </ListItem>
              </List>
            </Box>
            <Box>
              <List spacing={2}>
                <ListItem>
                  <Link href='https://mining.rsk.co/'>Merged Mining</Link>
                </ListItem>
                <ListItem>
                  <Link href='https://www.rsk.co/bounty-program/'>
                    Bountry Program
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href='https://grants.rsk.co/'>Grants Program</Link>
                </ListItem>
                <ListItem>
                  <Link href='https://fund.rsk.co/'>Ecosystem Fund</Link>
                </ListItem>
                <ListItem>
                  <Link href='https://studio.rsk.co/'>Innovation Studio</Link>
                </ListItem>
              </List>
            </Box>
            <Box>
              <List spacing={2}>
                <ListItem>
                  <Link href='https://www.rsk.co/defi'>Open Finance</Link>
                </ListItem>
                <ListItem>
                  <Link href='https://rsk.co/Use-cases.html/'>Use Cases</Link>
                </ListItem>
                <ListItem>
                  <Link href='https://rsk.co/faqs.html/'>Faqs</Link>
                </ListItem>
                <ListItem>
                  <Link href='https://blog.rsk.co/'>Blog</Link>
                </ListItem>
                <ListItem>
                  <Link href='https://rsk.co/Brand_Guidelines/RSK_BrandManual_V6.pdf'>
                    Brand Guidelines
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Box>
              <List spacing={2} fontWeight='bold'>
                <ListItem>
                  <Link href='https://rsk.co/terms-conditions.html'>
                    Terms & Conditions
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href='https://rsk.co/privacy-policy.html'>
                    Privacy Policy
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href='https://www.iovlabs.org/'>About IOVlabs</Link>
                </ListItem>
                <ListItem>
                  <Link href='https://www.iovlabs.org/contact.html'>
                    Contact IOVlabs
                  </Link>
                </ListItem>
                <ListItem>
                  <Button
                    variant='normal'
                    as={Link}
                    href='https://developers.rsk.co/'
                    _hover={{ color: 'white' }}
                  >
                    Documentation
                  </Button>
                </ListItem>
              </List>
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer
