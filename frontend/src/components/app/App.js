import LoginForm from '../auth/LoginForm';
import SignUpForm from '../user/SignUpForm';
import React, { useState } from 'react';

import Feed from '../feed/Feed'
import Homepage from '../homepage/Homepage'
import Navbar from '../navbar/navbar'
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage navigate={useNavigate()} />} />
        <Route path="/posts" element={<Feed navigate={useNavigate()} />} />
        <Route path="/login" element={<LoginForm navigate={useNavigate()} />} />
        <Route
          path="/signup"
          element={<SignUpForm navigate={useNavigate()} />}
        />
      </Routes>
    </>
  );
};

export default App;
