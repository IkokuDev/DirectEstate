/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import PropertyDetails from './pages/PropertyDetails';
import AddProperty from './pages/AddProperty';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="property/:id" element={<PropertyDetails />} />
          <Route path="add-property" element={<AddProperty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
