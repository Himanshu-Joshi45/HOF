import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HallOfFame from './pages/HallOfFame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
