import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import { CreateCard } from './pages/CreateCard';
import { DataProvider } from './utils/reducer';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/card" element={<CreateCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
