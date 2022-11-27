import React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const FillContainer = ({ children }: Props) => {
  return (
    <Box height="100%" overflow="hidden">
      {children}
    </Box>
  );
};

export default FillContainer;
