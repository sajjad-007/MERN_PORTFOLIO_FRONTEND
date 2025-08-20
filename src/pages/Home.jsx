import React from 'react'
import Hero from './sub-components/Hero';
import About from './sub-components/About';
import Contact from './sub-components/Contact';
import MyApps from './sub-components/MyApps';
import Portfolio from './sub-components/Portfolio';
import Skill from './sub-components/Skill';
import TimeLine from './sub-components/TimeLine';
import "../App.css"

const Home = () => {
  return (
    <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      <Hero/>
     <TimeLine/>
      <About/>
      <Skill/>
      <Portfolio/>
      <MyApps/>
      <Contact/> 
    </article>
  );
}

export default Home