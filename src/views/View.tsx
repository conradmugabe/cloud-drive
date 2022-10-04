import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FolderFiles from '../components/compound/FolderFiles';
import RecentFiles from '../components/compound/RecentFiles';

const View = () => {
  return (
    <Routes>
      <Route path="folder" element={<></>}>
        <Route
          index
          element={
            <>
              <RecentFiles />
              <FolderFiles />
            </>
          }
        />
        <Route path=":folderId" element={<FolderFiles />} />
      </Route>
    </Routes>
  );
};

export default View;
