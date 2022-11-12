import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import AddNew from './AddNew';

const FileExplorer = () => {
  return (
    <>
      <Heading as="h3" size="md">
        My Drive
      </Heading>
      <Outlet />
      <AddNew />
    </>
  );
};

export default FileExplorer;
