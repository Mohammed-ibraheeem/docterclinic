import { Route, Routes } from "react-router-dom";
import Footers from "./components/Footer";
import Home from "./components/Home";
import Navbars from "./components/Navbar";
import Contact from "./components/Contact";
import AboutUS from "./components/AboutUs";
import Working from "./components/Working";
import BookAppointment from "./components/BookAppointment";
import Services from "./components/Services";
import LatestNews from "./components/LatestNews";


function App() {
  return (
    <>
      <Navbars />
      <>
        <Home />
        <AboutUS />
        <Working />
        <BookAppointment />
        <Services />
        <LatestNews />
      </>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <AboutUS />
            <Working />
            <BookAppointment />
            <Services />
            <LatestNews />
          </>
        } />
        <Route path="/home" element={
          <>
            <Home />
            <AboutUS />
            <Working />
            <BookAppointment />
            <Services />
            <LatestNews />
          </>
        } />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footers />
    </>
  );
}

export default App;
