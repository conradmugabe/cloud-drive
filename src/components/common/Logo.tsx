import { Icon } from '@chakra-ui/react';
import React from 'react';
import { TbCloudFog } from 'react-icons/tb';

type Props = {
  color?: string;
  size?: number;
  strokeWidth?: number;
};

const Logo = ({ color = 'linkedin.500', size = 12, ...rest }: Props) => {
  const height = size;
  const width = size;
  return (
    <Icon
      as={TbCloudFog}
      height={height}
      width={width}
      color={color}
      {...rest}
    />
  );
};

export default Logo;
