import Dash from "./pages/Dash";
import Home from "./pages/Home"
import Counter from "./pages/Dash/components/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/counter" element={<Counter />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
      </Router>
    
  );
}

export default App;

