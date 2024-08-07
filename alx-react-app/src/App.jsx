import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Mthobisi Snalo Cele" age="21" bio="Loves transforming designs into responsive and user friendly websites" />
      <Footer />
    </>
  )
}

export default App
