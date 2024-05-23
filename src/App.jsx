import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Stack from "./Pages/Stack";
import Contact from "./Pages/Contact";
import AppLayout from "./ui/AppLayout";
import Project from "./Pages/Project";
import { AiFillLinkedin } from "react-icons/ai";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/www.linkedin.com/in/hamid-iqbal1"
              element={<AiFillLinkedin />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
