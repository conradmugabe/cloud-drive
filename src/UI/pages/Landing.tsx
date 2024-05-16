import { Link } from 'react-router-dom';
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Button,
  Image,
} from '@chakra-ui/react';
import { IoMdSync } from 'react-icons/io';
import { TbCloudLock } from 'react-icons/tb';
import { HiOutlineShare } from 'react-icons/hi';
import Feature from './Landing.Components/Feature';
import image from '../../assets/my_files_cloud.svg';

const featuresList = [
  {
    icon: IoMdSync,
    title: 'Store and Sync',
    text: 'Keep all your files securely stored, up to date and accessible from any device',
  },
  {
    icon: TbCloudLock,
    title: 'Stay Secure',
    text: 'Keep your files private with multiple layers of protection from the service trusted by millions',
  },
  {
    icon: HiOutlineShare,
    title: 'Share',
    text: 'Quickly send any file-big or small-to anyone',
  },
];

const Landing = () => {
  return (
    <>
      <Center>
        <VStack maxW="7xl" spacing={0}>
          <SimpleGrid columns={2} gap={10}>
            <VStack pt={20} spacing="5">
              <Heading size="4xl" fontWeight="normal" lineHeight="shorter">
                Easy and secure access to your content
              </Heading>
              <Text
                textAlign="justify"
                fontSize="xl"
                color="blackAlpha.700"
                lineHeight="7"
                width="70%"
                alignSelf="start"
              >
                Store, share, and collaborate on files and folder from your
                mobile device, table, or computer
              </Text>
              <Box width="100%" py="5">
                <Link to="/auth/login">
                  <Button
                    alignSelf="flex-start"
                    colorScheme="linkedin"
                    size="lg"
                  >
                    Try Cloud Drive
                  </Button>
                </Link>
              </Box>
            </VStack>
            <Box w="100%" h="100%" display="grid" placeContent="center">
              <Image src={image} />
            </Box>
          </SimpleGrid>
          <VStack bgColor="gray.50" py="28" px="10" gap="10">
            <Heading size="xl" fontWeight="bold">
              Do more with your files
            </Heading>
            <SimpleGrid columns={3} gap={10}>
              {featuresList.map((item) => (
                <Feature key={item.title} item={item} />
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Center>
    </>
  );
};

export default Landing;
