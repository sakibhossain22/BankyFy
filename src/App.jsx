import './App.css'
import AboutUs from './Components/AboutUs/AboutUs'
import Advantage from './Components/Advantage/Advantage'
import Banner from './Components/Banner/Banner'
import Customize from './Components/Customize/Customize'
import Download from './Components/Download/Download'
import Faq from './Components/FAQ/Faq'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
function App() {
  return (
  <div className='overflow-hidden'>
     <Navbar></Navbar>
     <Banner></Banner>
     <Features></Features>
     <Advantage></Advantage>
     <Customize></Customize>
     <AboutUs></AboutUs>
     <Faq></Faq>
     <Download></Download>
     <Footer></Footer>
  </div>
  )
}

export default App
