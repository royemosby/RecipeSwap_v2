import logo from './logo.svg';
import './App.css';

import MainContainer from './main/MainContainer';
import UsersContainer from './users/UsersContainer';
import UserContainer from './users/UserContainer';
import Header from './common/Header'
import Footer from './common/Footer'

function App() {
  return (
    <>
      <Header/>
      <MainContainer/>
      <UsersContainer/>
      <UserContainer/>
      <Footer/>
    </>
  );
}

export default App;
