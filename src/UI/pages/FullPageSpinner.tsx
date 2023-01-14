import React from 'react';
import { Spinner } from '@chakra-ui/react';
import FullPage from './FullPage';

const FullPageSpinner = () => {
  return (
    <FullPage>
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.6s"
        emptyColor="white"
        color="linkedin"
      />
    </FullPage>
  );
};

export default FullPageSpinner;
