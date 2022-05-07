import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddPanel from './components/AddPanel';

const App = () => {
  return (

    <div className="App">
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-food" element={<AddPanel />} />
            </Routes>
        </Router>
    </div>

  );
}

export default App;
