import React from "react";
import Input from "./Input";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <>
  
    <Router>

    <div className="App">
      <Routes>

      <Route exact path="/" element={<Input/>}/>
      <Route exact path="/TemperatureConverter" element={<Input/>}/>
 
      </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
