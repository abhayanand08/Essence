import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Homepage} from './route.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
