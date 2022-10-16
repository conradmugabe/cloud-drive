import React from 'react';
import { Flex } from '@chakra-ui/react';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { FiHardDrive } from 'react-icons/fi';
import MenuItem from '../../interfaces/Menu';
import SideMenuItem from '../common/SideMenuItem';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const [name, setName] = React.useState('');

  const handleClick = (name: string) => {
    setName(name);
  };

  const sideMenuItems: MenuItem[] = [
    { route: '/', name: 'My Drive', icon: <FiHardDrive /> },
    { route: '/', name: 'Shared with me', icon: <MdOutlinePeopleAlt /> },
  ];

  return (
    <Flex flexDir="column" gap={2}>
      {sideMenuItems.map((item) => (
        <Link to={item.route} key={item.name}>
          <SideMenuItem item={item} name={name} onSelect={handleClick} />
        </Link>
      ))}
    </Flex>
  );
};

export default SideNav;
