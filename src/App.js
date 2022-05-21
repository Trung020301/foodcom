import { Route, Routes, Router} from "react-router-dom"
import Home from "./pages/home/Home";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
