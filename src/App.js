import React from 'react'
import Header from './components/shared/Layout/Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header></Header>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App