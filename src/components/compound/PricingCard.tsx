import React from 'react';
import { Button, Center, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { BsDash } from 'react-icons/bs';

type Props = {
  selected?: string;
  isMonthly?: boolean;
  pricing: {
    space: string;
    users: string;
    name?: string;
    price?: { monthly: string; yearly: string };
    hasFileTransferLimit: boolean;
    isSecure: boolean;
    canShare: boolean;
  };
};

type HeaderProps = {
  name?: string;
  price?: { monthly: string; yearly: string };
  isMonthly?: boolean;
};

const PricingCardHeader = ({ name, price, isMonthly }: HeaderProps) => {
  return (
    <VStack spacing={5} py={10}>
      <Heading size="sm">{name}</Heading>
      <Heading color="linkedin.800">
        {isMonthly ? price?.monthly : price?.yearly}
      </Heading>
      {name && (
        <Button colorScheme="linkedin" size="sm">
          Get Started
        </Button>
      )}
    </VStack>
  );
};

const PricingCard = ({ pricing, selected, isMonthly }: Props) => {
  const {
    space,
    users,
    hasFileTransferLimit,
    isSecure,
    canShare,
    name,
    price,
  } = pricing;

  const isSelected = name === selected;

  return (
    <VStack
      py={5}
      border="3px solid"
      borderColor={isSelected ? 'linkedin.700' : 'transparent'}
      textAlign="center"
      rounded="3xl"
    >
      <PricingCardHeader name={name} price={price} isMonthly={isMonthly} />
      <Center p={5} bgColor="linkedin.100" width="100%">
        <Text fontSize="md" color="blackAlpha.700">
          {space}
        </Text>
      </Center>
      <Center p={5} width="100%">
        <Text fontSize="md" color="blackAlpha.700">
          {users}
        </Text>
      </Center>
      <Center p={5} bgColor="linkedin.100" width="100%">
        <Icon
          as={hasFileTransferLimit ? RiCheckboxCircleFill : BsDash}
          height="8"
          width="8"
          color="linkedin.500"
        />
      </Center>
      <Center p={5} width="100%">
        <Icon
          as={isSecure ? RiCheckboxCircleFill : BsDash}
          height="8"
          width="8"
          color="linkedin.500"
        />
      </Center>
      <Center p={5} width="100%" bgColor="linkedin.100">
        <Icon
          as={canShare ? RiCheckboxCircleFill : BsDash}
          height="8"
          width="8"
          color="linkedin.500"
        />
      </Center>
    </VStack>
  );
};

export default PricingCard;
