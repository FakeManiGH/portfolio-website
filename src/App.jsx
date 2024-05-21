import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navigation, Footer } from './components';
import { Home, About, Projects, Skills, LBOgeneral, LBOreact } from "./pages";


function App() {

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/LBOgeneral" element={<LBOgeneral />} />
          <Route path="/LBOreact" element={<LBOreact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
