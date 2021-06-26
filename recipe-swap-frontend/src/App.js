import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import MainContainer from './main/MainContainer';
import RecipeContainer from './recipes/RecipeContainer';
import UsersContainer from './users/UsersContainer';
import UserContainer from './users/UserContainer';
import Header from './common/Header'
import Footer from './common/Footer'
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
          <Route exact path="/" component={MainContainer}/>
          <Route path="/recipe" component={RecipeContainer}/>
          <Route path="/user" component={UserContainer}/>
          <Route path="/users" component={UsersContainer}/>
          <Footer/>
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
