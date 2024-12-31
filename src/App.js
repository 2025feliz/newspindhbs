import React from 'react';
import './App.css';
import Error from './components/Error';
import CameraComponent from './components/camara';
import CameraComponent2 from './components/camara2';
import Form from './components/form';
import ErrorComponent from './components/404'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path='camara' element={<CameraComponent />} />
          <Route path='segundacamara' element={<CameraComponent2 />} />
          <Route path='404' element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
