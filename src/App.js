import React from 'react';
import './App.css';
import store from './store/index'
import update_person from './store/actions/personActions';


function updatePerson(){
  store.dispatch(update_person)
}



function App() {
  return (
    <div className="App">
      <h1>Redux tutorials</h1>
      Person Name :{store.getState().person.name}
<button  onClick={updatePerson}>Update button</button>
      <br/>
     Geme Name :{store.getState().game.name}
    </div>
  );
}

export default App;
