import './App.css'
import logo from './assets/images/logo.svg'
import Intro from './components/Intro'
import Meaning from './components/Meaning'
import HealthyList from './components/HealthyList'
import Limit from './components/Limit'

function App() {

  return (
    <>
      <div className='bg-decoration'></div>
      <header className='center'>
        <img src={logo} alt='logo' />
      </header>
      <main>
        <Intro />
        <Meaning />
        <HealthyList />
        <Limit />       
      </main>
    </>
  )
}

export default App
