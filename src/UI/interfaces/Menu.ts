import React from 'react';

export default interface MenuItem {
  name: string;
  icon?: React.ReactNode;
  route: string;
  value: string;
}
