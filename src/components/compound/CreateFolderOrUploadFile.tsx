import React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import CreateFolder from './forms/CreateFolder';
import UploadFile from './forms/UploadFile';

interface Props {
  onClose: () => void;
}

const CreateFolderOrUploadFile = ({ onClose }: Props) => {
  return (
    <Tabs isFitted variant="enclosed-colored" pt="1">
      <TabList>
        <Tab>Create Folder</Tab>
        <Tab>Upload File</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CreateFolder onClose={onClose} />
        </TabPanel>
        <TabPanel>
          <UploadFile onClose={onClose} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CreateFolderOrUploadFile;
