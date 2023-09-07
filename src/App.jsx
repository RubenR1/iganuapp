import NavBar from './components/navbar/NavBar';
import Accomodation from './components/accomodation/Accomodation';
import Activities from './components/activities/Activities';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Reviews from './components/reviews/Reviews';
import Work from './components/work/Work';
import './app.scss';


function App() {
  return <div className='app'>
    {/* Nav Bar */}
    <NavBar/>
    {/* Section
        - intro
        - portfolio
        - work
     */}
     <div className="sections"> 
      <Intro/>
      {/* <Portfolio/> */}
      <Work/>
      <Reviews/>
      <Contact/>

     </div>

  </div>
}

export default App; 
