import {createStore, combineReducers} from 'redux'

import gameReducer from './reducer/gameReducer'

import personReducer from './reducer/personReducer'



const AllReducer=combineReducers({game:gameReducer,person:personReducer})

const InitialStates={
  game:{name:'football'},
  person:{name:'Elison Nyagwaru'}
}

const store=createStore(AllReducer,InitialStates,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store