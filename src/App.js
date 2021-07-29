import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";  
import Main from './core.js/Main'
import Admin from './admin.js/Admin'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/admin" exact component={Admin}/>
            </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
