import SignIn from "./pages/SignIn/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
