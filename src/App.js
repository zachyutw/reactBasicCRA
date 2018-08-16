import React, { Component } from 'react';
import logo from './logo.svg';
import s from  './App.css';
import Button from '@material-ui/core/Button';
import firebaseApp from 'js/firebase';

class App extends Component {

  componentDidMount(){
    this.setState({firebaseApp:firebaseApp});
  }

  componentWillUnmount(){
    this.setState({firebaseApp:{}});
  }
  handleClick = ()=> {
    const {firebaseApp} =this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(
      "zachyu.tw1@gmail.com", "qwer1234").then(function(resp){
        console.log(resp);
      }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
     console.log("click");
  }


  render() {
    return (
      <div className={s.App}>
        <header className={s.AppHeader}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
    
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained" color="primary" onClick={this.handleClick.bind(this)}>
      Hello World
    </Button>
    
      </div>
    );
  }
}

export default App;
