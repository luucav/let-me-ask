import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home /> } />
        <Route path="/rooms/newroom" element={<NewRoom />} />  
      </ Routes>
    </BrowserRouter>
  );
}

export default App;
