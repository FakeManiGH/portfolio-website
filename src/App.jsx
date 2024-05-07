import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navigation, Footer } from './components';
import { Home, About, Projects, Skills, Lbo } from "./pages";


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
          <Route path="/lbo" element={<Lbo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
