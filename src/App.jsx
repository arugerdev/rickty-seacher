import './App.css'
import { useLocation } from 'wouter'
import Logo from './assets/loader-logo.png'
import SocialNetworks from './components/SocialNetworks'
import RouteController from './components/RouteController'
function App() {
  const [location, pushLocation] = useLocation();

  return (
    <div className="App">
      <button onClick={() => {
        pushLocation('/')
      }} className='logo'><img src={Logo} alt="" /> <span>by Aruger.dev</span></button>

      <RouteController></RouteController>
      <SocialNetworks></SocialNetworks>
    </div>
  )
}

export default App
