import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Heading = ({ children }: Props) => {
  return <h2>{children}</h2>;
};

export default Heading;
