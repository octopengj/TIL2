import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/profile/:id" component={Profile} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
      <Route path="/" exact component={Home} />
      <Route component={NotFound}/>
    </Switch>

    </BrowserRouter>
  );
}

export default App;
