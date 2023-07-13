import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navBar';
import Sidebar from './components/sidebar'
import Home from './components/Home';
import Template from './components/template';
import Template1 from './components/template1';
import Personal from './components/personal';
// import { Provider } from 'react-redux';
import Professional from './components/professional'
// import Educational from './components/educational'
import Contact from './components/contact';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import store, {history} from './features/store';
// import { Route } from 'react-router-dom';
function App() {
  return (
    <>
    {/* <Personal/> */}
    {/* // <Template1/>
    // </> */}
   
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sidebar/:value" element={<Sidebar />} />
      <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/template" element={<Template />} />
          <Route path="/template1" element={<Template1/>} />
          <Route path="/personal" element={<Personal/>} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
   
 </>
  );
}

export default App;
