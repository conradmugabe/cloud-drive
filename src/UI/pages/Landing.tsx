import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Button,
  Icon,
  ButtonGroup,
} from '@chakra-ui/react';
import { IoMdSync } from 'react-icons/io';
import { TbCloudLock } from 'react-icons/tb';
import { HiOutlineShare } from 'react-icons/hi';
import PricingCard from '../components/compound/PricingCard';

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

const pricingList = [
  {
    name: 'Free',
    space: '1 GB',
    users: 'Unlimited',
    hasFileTransferLimit: false,
    isSecure: true,
    canShare: true,
    price: {
      monthly: '$0.00',
      yearly: '$0.00',
    },
  },
  {
    name: 'Pro Plan',
    space: '2,000 GB',
    users: 'Unlimited',
    hasFileTransferLimit: true,
    isSecure: true,
    canShare: true,
    price: {
      monthly: '$10.00',
      yearly: '$100.00',
    },
  },
  {
    name: 'Enterprise Plan',
    space: 'As much space as needed',
    users: 'Unlimited',
    hasFileTransferLimit: true,
    isSecure: true,
    canShare: true,
    price: {
      monthly: '$25.00',
      yearly: '$250.00',
    },
  },
];

const Landing = () => {
  const [isMonthly, setIsMonthly] = React.useState(true);

  const selected = 'Pro Plan';

  return (
    <>
      <Center>
        <VStack maxW="7xl" spacing={0}>
          <SimpleGrid columns={2} gap={10}>
            <VStack pt={20}>
              <Heading size="3xl" fontWeight="thin" lineHeight="shorter">
                Easy and secure access to your content
              </Heading>
              <Text textAlign="justify" fontSize={'xl'} color="blackAlpha.600">
                Store, share, and collaborate on files and folder from your
                mobile device, table, or computer
              </Text>
              <Box width="100%" py="10">
                <Link to="login">
                  <Button alignSelf="flex-start" colorScheme="linkedin">
                    Try Cloud Drive
                  </Button>
                </Link>
              </Box>
            </VStack>
            <Box w="100%" h="100%" bgColor="blue.100"></Box>
          </SimpleGrid>
          <VStack bgColor="gray.50" py="28" px="10" gap="10">
            <Heading size="xl" fontWeight="bold">
              Do more with your files
            </Heading>
            <SimpleGrid columns={3} gap={10}>
              {featuresList.map((item) => (
                <VStack
                  key={item.title}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.200"
                  p={4}
                  mt={4}
                  bgColor="white"
                  gap="2"
                >
                  <Icon as={item.icon} h="10" w="10" color="linkedin.500" />
                  <Heading fontSize="md" mb={10}>
                    {item.title}
                  </Heading>
                  <Text
                    fontSize={'md'}
                    color="blackAlpha.700"
                    textAlign="center"
                  >
                    {item.text}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
          <VStack py="28" px="10" spacing="10">
            <Heading>Find the plan that's right for you</Heading>
            <ButtonGroup
              size="sm"
              variant="outline"
              p={1}
              bgColor="linkedin.100"
              color="linkedin.500"
              rounded="md"
              isAttached
            >
              <Button
                color={isMonthly ? 'linkedin.700' : ''}
                bgColor={isMonthly ? 'white' : ''}
                onClick={() => setIsMonthly(true)}
                _hover={{ bgColor: isMonthly ? 'white' : '' }}
              >
                Monthly billing
              </Button>
              <Button
                color={isMonthly ? '' : 'linkedin.700'}
                bgColor={isMonthly ? '' : 'white'}
                onClick={() => setIsMonthly(false)}
                _hover={{ bgColor: isMonthly ? '' : 'white' }}
              >
                Annual billing
              </Button>
            </ButtonGroup>
            <SimpleGrid columns={3} width="100%">
              {pricingList.map((item) => (
                <PricingCard
                  key={item.name}
                  pricing={item}
                  selected={selected}
                  isMonthly={isMonthly}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Center>
    </>
  );
};

export default Landing;
