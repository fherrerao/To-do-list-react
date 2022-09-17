import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './pages/About';
import NotMatch from './pages/NotMatch';

function App() {
  return (
    <div>
      <Router basename="To-do-list-react/">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<TodoContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
