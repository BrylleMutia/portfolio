import React from 'react';
import { container, app } from './App.module.css';

import cx from "classnames";

import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className={app}>
      <Navbar />
    </div>
  );
}

export default App;
