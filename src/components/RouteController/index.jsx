import { Route, Switch } from 'wouter'
import SearchPage from '../../pages/SearchPage'
import CharacterPage from '../../pages/CharacterPage'
import EpisodePage from '../../pages/EpisodePage'

export default function RouteController() {
    return (
        <Switch>
            <Route path='/' component={SearchPage}></Route>
            <Route path='/character/:id' component={CharacterPage}></Route>
            <Route path='/episode/:id' component={EpisodePage}></Route>
        </Switch>
    )
}