import {
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";


function App() {

  return (

    <div className="bg-black min-h-screen text-white">


      <Header />
      

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/history" element={<History />} />

        

        <Route path="/contact" element={<Contact />} />
        <Route path="/franchise" element={<Franchise />} />

      </Routes>

    </div>

  );
}

export default App;