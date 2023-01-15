import './App.css'
import { Route, Switch, useLocation } from 'wouter'
import SearchPage from './pages/SearchPage'
import CharacterPage from './pages/CharacterPage'
import EpisodePage from './pages/EpisodePage'
import Logo from './assets/loader-logo.png'
import SocialNetworks from './components/SocialNetworks'
function App() {
  const [location, pushLocation] = useLocation();

  return (
    <div className="App">
      <button onClick={() => {
        pushLocation('/')
      }} className='logo'><img src={Logo} alt="" /> <span>by Aruger.dev</span></button>
      <Switch>
        <Route path='/' component={SearchPage}></Route>
        <Route path='/character/:id' component={CharacterPage}></Route>
        <Route path='/episode/:id' component={EpisodePage}></Route>
      </Switch>
      <SocialNetworks></SocialNetworks>
    </div>
  )
}

export default App
