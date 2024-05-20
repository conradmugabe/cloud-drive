import React from 'react';
import { Divider, Flex } from '@chakra-ui/react';
import { FiHardDrive } from 'react-icons/fi';
import MenuItem from '../../interfaces/Menu';
import SideMenuItem from '../common/SideMenuItem';
import { Link } from 'react-router-dom';
import StorageStats from './StorageStats';
import { useSelectedFSNodeFile } from '@context/selected.fs.node.context';

const SideNav = () => {
  const [name, setName] = React.useState('');
  const { setSelectedFSNode } = useSelectedFSNodeFile();

  const handleClick = (name: string) => {
    setName(name);
    setSelectedFSNode(null);
  };

  const sideMenuItems: MenuItem[] = [
    { route: '/', name: 'My Drive', value: '', icon: <FiHardDrive /> },
  ];

  return (
    <Flex flexDir="column" gap={2}>
      {sideMenuItems.map((item) => (
        <Link to={item.route} key={item.name}>
          <SideMenuItem item={item} name={name} onSelect={handleClick} />
        </Link>
      ))}
      <Divider marginBottom={10} size="100" borderColor="blackAlpha.400" />
      <StorageStats />
    </Flex>
  );
};

export default SideNav;
