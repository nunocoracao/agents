import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { ContainersPage } from '@/pages/ContainersPage';
import { ImagesPage } from '@/pages/ImagesPage';
import { VolumesPage } from '@/pages/VolumesPage';
import { NetworksPage } from '@/pages/NetworksPage';
import { DevEnvironmentsPage } from '@/pages/DevEnvironmentsPage';
import { SettingsPage } from '@/pages/SettingsPage';
import '@/index.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/containers" replace />} />
          <Route path="/containers" element={<ContainersPage />} />
          <Route path="/images" element={<ImagesPage />} />
          <Route path="/volumes" element={<VolumesPage />} />
          <Route path="/networks" element={<NetworksPage />} />
          <Route path="/dev-environments" element={<DevEnvironmentsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;