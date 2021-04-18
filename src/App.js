import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components'

function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
