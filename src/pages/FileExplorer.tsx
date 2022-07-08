import React from 'react';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../components/common/IconButton';

interface Props {
  className?: string;
}

const FileExplorer = ({ className }: Props) => {
  return (
    <div className={`h-screen bg-slate-50 text-white ${className}`}>
      <IconButton
        icon={faAdd}
        onClick={() => alert('Create Folder')}
        className="bg-cyan-900 rounded-full shadow-sm absolute bottom-10 right-10"
      />
    </div>
  );
};

export default FileExplorer;
