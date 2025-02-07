import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Track from './components/Track';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Track />} />
        <Route path="/tracks" element={<Track />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
