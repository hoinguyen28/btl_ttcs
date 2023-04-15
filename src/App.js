
import { BrowserRouter as Router } from "react-router-dom";
import AppRouters from "./config/appRouters";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <AppRouters/>
      </Router>
    </div>
  );
}

export default App;
