import React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children?: React.ReactNode;
};

const FullPage = ({ children }: Props) => {
  return (
    <Box height="full" width="full">
      {children}
    </Box>
  );
};

export default FullPage;
