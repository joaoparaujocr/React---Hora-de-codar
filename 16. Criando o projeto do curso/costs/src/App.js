import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Home from './components/pages/Home/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject/NewProject';
import Container from './components/layout/Container/Container';
import Footer from './components/layout/Footer/Footer';
import Projects from './components/pages/Projects'

function App() {
  return (
    <Router>
      <Header />
      <Container customClass="min-height">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
