import logo from './logo.svg';
import Frontpage from './compo/Frontpage';
import Signinform from './compo/SigninForm';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Admin } from './compo/Admin';
import { Allemp } from './compo/Allemp';
import { Emp } from './compo/Emp';


function App() {
  return (
    <div className="App">

      <Router>
      <Switch>

          <Route exact path="/">
            <Frontpage />
          </Route>

           <Route path="/Admin/:id?">
            <Admin />
          </Route> 

        
         <Route path="/Allemp">
            <Allemp />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
