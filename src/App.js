
import './App.css';
import Home from './components/Home';
import ChiSono from './components/ChiSono';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  
  return (
 
   <Router>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/ChiSono" className="nav-link">Chi sono</Link>
            </li>
            <li className="nav-item">
              <Link to="/Portfolio" className="nav-link"> Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container"></div>
   <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ChiSono" element={<ChiSono />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          
        </Routes>
    </Router>
   
  
  
  );
}



export default App;
