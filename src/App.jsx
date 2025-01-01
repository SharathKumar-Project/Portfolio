import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Navbar/Loading";

const Profile = React.lazy(() => import("./components/Profile"));
const About = React.lazy(() => import("./components/About"));
const Technologies = React.lazy(() => import("./components/Technologies"));
const Experience = React.lazy(() => import("./components/Experience"));
const Projects = React.lazy(() => import("./components/Projects"));
const Contact = React.lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased relative'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
      </div>

      <div className='container mx-auto px-8 relative z-20'>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Profile />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
