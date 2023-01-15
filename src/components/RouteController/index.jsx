import { Route, Switch } from 'wouter'
import SearchPage from '../../pages/SearchPage'
import CharacterPage from '../../pages/CharacterPage'
import EpisodePage from '../../pages/EpisodePage'

export default function RouteController() {
    return (
        <Switch>
            <Route path='/' ><SearchPage></SearchPage></Route>
            <Route path='/character/:id' ><CharacterPage></CharacterPage></Route>
            <Route path='/episode/:id' ><EpisodePage></EpisodePage></Route>
        </Switch>
    )
}