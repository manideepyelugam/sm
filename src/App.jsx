import React from 'react'
import {  Router, Route,Routes } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import Navbar from './pages/Navbar';
import UserCard from './pages/UserCard';

const App = () => {
  return (
    <div>
            <Routes>
              <Route path='/' element={<SignUpForm />} />
              <Route path='/usercard'  element={<UserCard />} />
             </Routes>

    </div>
  )
}

export default App