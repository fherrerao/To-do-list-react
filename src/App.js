import { HashRouter, Route, Routes } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<TodoContainer />} />      
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
