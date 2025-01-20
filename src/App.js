import './App.css';
// import { Canvas } from '@react-three/fiber';
// import { Suspense } from 'react';
// import { OrbitControls } from '@react-three/drei';
// import Box from './threeModel';
// import { NavDropdown } from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Blog';
import Home from './Home';
import Note from './Note';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      
        <div className='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dagechan/homePage" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/note" element={<Note />} />
          </Routes>
        </div>
        
        <div className='wrapper'>
          <footer>
            <h5>My accounts</h5>
            <div className='accounts'>
              <a href='https://github.com/Dagechan'>
                <FontAwesomeIcon color='#333' icon={faGithubSquare} style={{height:'3.0em', width:'3.0em'}}/>
              </a>
              <a href='https://twitter.com/superdagechan'>
                <FontAwesomeIcon color='#3eaded' icon={faTwitterSquare} style={{height:'3.0em', width:'3.0em'}}/>
              </a>
            </div>
            <div className="footer-container">
              <p>© 2025 Dagechan's room.</p>
            </div>
        </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;