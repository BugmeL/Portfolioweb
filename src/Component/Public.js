import React, { useEffect, useState } from 'react';
import "./App.css";
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Services from '../components/services/Services';
import Qualification from '../components/qualification/Qualification';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import Work from '../components/work/Work';
import Footer from '../components/footer/Footer';
import ScrollUp from '../components/scrollup/ScrollUp';
import { useSelector } from 'react-redux';
import { PROFILES } from '../commonData';


const App = () => {
  const { isAuth } = useSelector(a => a.auth);
  const [values, setValues] = useState({})


  useEffect(() => {

   
    let profile = PROFILES.find(a => a.username === 'jaybeegeli');

    setValues(profile)

    
  }, [])



  return (
    <>
  
    <Header data={values} />
    <main className="main">
      <Home data={values}/>
      <About data={values}/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Work data={values}/>
      <Testimonials/>
      <Contact data={values} />
    </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App