import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import IntroduceStore from './components/IntroduceStore'
import LookBook from './components/LookBook'
import InstagramFollow from "./components/InstagramFollow";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <IntroduceStore/>
      <LookBook/>
      <InstagramFollow />
      <Footer />
    </>
  )
}

export default App
