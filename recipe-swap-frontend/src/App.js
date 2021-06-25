import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import MainContainer from './main/MainContainer';
import RecipeContainer from './recipes/RecipeContainer';
import UsersContainer from './users/UsersContainer';
import UserContainer from './users/UserContainer';
import Header from './common/Header'
import Footer from './common/Footer'

function App() {
  return (
    <div className="skeleton">
      <Header/>
      <Router>
        <div>
          <Route exact path="/" component={MainContainer}/>
          <Route path="/recipe" component={RecipeContainer}/>
          <Route path="/user" component={UserContainer}/>
          <Route path="/users" component={UsersContainer}/>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
