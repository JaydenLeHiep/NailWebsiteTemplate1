import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Story from './components/Story'
import IntroduceStore from './components/IntroduceStore'

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <IntroduceStore/>
      <Story/>
      <Footer />
    </>
  )
}

export default App
