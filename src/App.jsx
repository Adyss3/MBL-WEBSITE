import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Bucks from "./pages/Bucks"
import Hawks from "./pages/Hawks"
import Eagles from "./pages/Eagles"
import Hornets from "./pages/Hornets"
import Pelicans from "./pages/Pelicans"

const App = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/bucks" element={<Bucks/>} />
        <Route path="/hawks" element={<Hawks/>} />
        <Route path="/eagles" element={<Eagles/>} />
        <Route path="/hornets" element={<Hornets/>} />
        <Route path="/pelicans" element={<Pelicans/>} />
        
        
      </Routes>
    </Router>
  )
}

export default App
