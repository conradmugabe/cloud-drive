import { Box } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const FullScreen = ({ children }: Props) => {
  return (
    <Box height="100vh" overflow="hidden">
      {children}
    </Box>
  );
};

export default FullScreen;
