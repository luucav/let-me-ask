import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  Home  from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

//import './services/firebase'

function App() {
  
  return (
    <Router>

      <Routes>
        <Route path="/" element={< Home /> } />
        <Route path="/rooms/newroom" element={<NewRoom />} />  
      </ Routes>

    </Router>
  );
}

export default App;
