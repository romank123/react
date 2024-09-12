import { useEffect, useState } from "react";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <div className='menu'>
        <ul>
          <li>
            <Link to='/'>Главная</Link>
          </li>
          <li>
            <Link to='/profile'>Профиль</Link>
          </li>
        </ul>
      </div>

      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
