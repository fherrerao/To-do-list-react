import { HashRouter, Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<TodoContainer />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
