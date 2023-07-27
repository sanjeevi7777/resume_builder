import './App.css';
// import Login from './components/Login';
import Login from './components/login';
// import Login1 from './components/Login';
import SignUp from './components/signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navBar';
import Navbar3 from './components/navbar3';
// import Sidebar from './components/sidebar';
import Sidebar from './components/TempSideBar';
import Home from './components/Home';
import Template from './components/template';
import Template1 from './components/template1';
import Personal from './components/personal';
import Professional from './components/professional';
import Contact from './components/contact';
import Skills from './components/skills';
import Projects from './components/projects';
import Index from './components/index';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import React from 'react';
import Print from './components/print';
function App() {
  const user = useSelector(selectUser);
  return (
    <BrowserRouter>
    
      <Routes>
        {user ==='User'? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/index" element={<Index/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/print/:value" element={<Print />} />
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/sidebar/:value" element={<Sidebar />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/template" element={<Template />} />
            <Route path="/template1" element={<Template1 />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/educational" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </>
        ) : (
          <>
              <Route path="/index" element={<Index />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
              {/* <Route path="/login1" element={<Login1 />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/navbar" element={<Navbar3 />} />
            <Route path="/sidebar/:value" element={<Sidebar />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/template" element={<Template />} />
            <Route path="/template1" element={<Template1 />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/educational" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
    // <Login/>
  );
}

export default App;
