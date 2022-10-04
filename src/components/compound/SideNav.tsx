import React from 'react';
import { Flex } from '@chakra-ui/react';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { FiHardDrive } from 'react-icons/fi';
import MenuItem from '../../interfaces/Menu';
import SideMenuItem from '../common/SideMenuItem';

const SideNav = () => {
  const [name, setName] = React.useState('');

  const handleClick = (name: string) => {
    setName(name);
  };

  const sideMenuItems: MenuItem[] = [
    { name: 'My Drive', icon: <FiHardDrive /> },
    { name: 'Shared with me', icon: <MdOutlinePeopleAlt /> },
  ];

  return (
    <Flex flexDir="column" gap={2}>
      {sideMenuItems.map((item) => (
        <SideMenuItem
          key={item.name}
          item={item}
          name={name}
          onSelect={handleClick}
        />
      ))}
    </Flex>
  );
};

export default SideNav;
