import React from 'react';

export const useContextMenu = () => {
  const [showContextMenu, setShowContextMenu] = React.useState(false);
  const [{ x, y }, setCoordinates] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleClick = () => setShowContextMenu(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return { x, y, showContextMenu, setShowContextMenu, setCoordinates };
};
