import React from 'react';
import './App.css';
import store from './store/index'
import update_person from './store/actions/personActions';
import update_game from './store/actions/GameActions'
import fetch_data from './store/actions/userActions'
import {connect} from 'react-redux'


function App(props) {
  return (
    <div className="App">
      <h1>Redux tutorials</h1>
      Person Name :{props.person.name}
<button  onClick={props.updatePerson}>Update button</button>
      <br/>
     Game Name :{props.game.name}
     <button  onClick={props.updateGame}>Update Game</button>
     <br/>
     fetch Data
     <button  onClick={props.fetchUsers}>Fetch Data</button>
  
     {
       props.users.length === 0 ? <p>No user Found</p>:
       props.users.map(user => 
       <p>{user.category}</p> 
       )
     }
    </div>
  ); 
}

const mapStateToProps = state=>{
  return {
    game:state.game,
    person:state.person,
    users:state.users
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    updateGame:()=>{dispatch(update_game)},
    updatePerson:()=>{dispatch(update_person)},
    fetchUsers:()=>{dispatch(fetch_data)},
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
