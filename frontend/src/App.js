import * as React from 'react';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' component={HomePage}></Route>
      </Routes>
      <HomePage />
    </div>
  );
}

export default App;
