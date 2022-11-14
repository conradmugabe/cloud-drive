import React from 'react';
import { HStack, Menu, VStack } from '@chakra-ui/react';
import FileExplorer from '../components/compound/FileExplorer';
import SideNav from '../components/compound/SideNav';
import { useContextMenu } from '../hooks/useContextMenu';
import ContextMenu from '../components/compound/ContextMenu';
import { useSelectedFSNodeFile } from '../context/selected-fs-node-context';

const Dashboard = () => {
  const { selectedFSNode } = useSelectedFSNodeFile();
  const { x, y, showContextMenu, setShowContextMenu, setCoordinates } =
    useContextMenu();

  return (
    <HStack
      height="100vh"
      align="start"
      bgColor="whitesmoke"
      py={2}
      onContextMenu={(e) => {
        e.preventDefault();
        setShowContextMenu(true);
        setCoordinates({ x: e.pageX, y: e.pageY });
      }}
    >
      <Menu isOpen={showContextMenu}>
        <ContextMenu x={x} y={y} menuType={selectedFSNode?.type || ''} />
        <VStack width="18%" py={4}>
          <SideNav />
        </VStack>
        <VStack
          width="82%"
          align="start"
          position="relative"
          height="full"
          paddingRight="10"
          overflowY="auto"
        >
          <FileExplorer />
        </VStack>
      </Menu>
    </HStack>
  );
};

export default Dashboard;
