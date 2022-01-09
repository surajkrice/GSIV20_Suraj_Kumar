import NavBar from './components/NavBar/NarBar'
import Movies from './components/Movies/Movies';
import SingleMovie from './components/SingleMovie/SingleMovie';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Movies/>}/>
    <Route path="/movie/:id" element={<SingleMovie/>}/>
    <Route path="/search/:id" element={<SingleMovie/>}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
