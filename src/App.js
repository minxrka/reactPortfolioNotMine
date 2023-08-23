import "./styles/main.css";
import "./styles/reset.css";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Project from "./pages/Project";
import Contacts from "./pages/contacts";
import ScrollToTop from "./utils/scrollToTop";



function App() {
  return (

    <div className="App">
      <Router>
        <ScrollToTop></ScrollToTop>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/project/:id" element={<Project/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
