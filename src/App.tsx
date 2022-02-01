import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import {AllDaysOnOne} from './pages/AllDaysOnOne';
import {EnterBirthday} from './pages/EnterBirthday';
import {Landing} from './pages/Landing';


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="enter_birthday" element={<EnterBirthday/>} />
      <Route path="all_your_days_on_one_screen" element={<AllDaysOnOne />}/> 
    </Routes>
  );
};

export default App;
