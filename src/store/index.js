import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

import gameReducer from './reducer/gameReducer'

import personReducer from './reducer/personReducer'

import UserReducer from './reducer/UserReducer'

import thunk from 'redux-thunk'


const AllReducer=combineReducers({game:gameReducer,person:personReducer,users:UserReducer})

const InitialStates={
  game:{name:'football'},
  person:{name:'Elison Nyagwaru'},
  users:[]
}

const middleware=[thunk]

const store=createStore(AllReducer,InitialStates,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store