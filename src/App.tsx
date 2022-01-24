import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import {AllDaysOnOne} from './pages/AllDaysOnOne/AllDaysOnOne';
import {EnterBirthday} from './pages/EnterBirthday/EnterBirthday';
import {Landing} from './pages/Landing/Landing';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="enter_birthday" element={<EnterBirthday/>} />
          <Route path="all_your_days_on_one_screen" element={<AllDaysOnOne />}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
