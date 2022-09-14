import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Story from 'pages/Story';
import Selection from './pages/Selection/index';
import Game from './pages/Game/index';
import 'assets/css/common.css';
import 'assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/game" element={<Game />} />
        <Route path="/story/:id" element={<Story />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
