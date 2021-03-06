import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainContainer from './main/MainContainer';
import NewRecipe from './recipes/NewRecipe';
import EditRecipe from './recipes/EditRecipe';
import ShowRecipe from './recipes/ShowRecipe';
import IndexUsers from './users/IndexUsers';
import ShowUser from './users/ShowUser';
import Header from './common/Header'
import AuthModal from './common/AuthModal'
import {connect} from 'react-redux'

const renderAuthModal = (props) => {
    if(props.loginModalOpen){
      return <AuthModal/>
    }
  }

function App(props) {
  return (
    <div id="appWrapper">
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={MainContainer}/>
            <Route path="/users/:username" component={ShowUser}/>
            <Route path="/users" component={IndexUsers}/>
            <Route path="/recipes/new" component={NewRecipe}/>
            <Route path="/recipes/:recipeId/edit" component={EditRecipe}/>
            <Route path="/recipes/:recipeId" component={ShowRecipe}/>
          </Switch>
        </div>
        {renderAuthModal(props)}
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    loginModalOpen: state.currentUser.loginModalOpen
  }
}

export default connect(mapStateToProps)(App);
