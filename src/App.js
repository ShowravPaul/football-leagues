import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/league/:id">
            <LeagueDetails></LeagueDetails>
          </Route>
          <Route path='*'> {/* last case */}
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
