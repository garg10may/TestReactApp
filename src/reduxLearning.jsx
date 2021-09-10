
//reducer is a pure function
//In pure function we don't work with dom elements, do api call, use global variables

function reducer (state=[], action) {
  if (action.type ==='bugAdded') {
    return [...state, { id: ++lastid}]
  } else if (action.type==='bugRemoved') {

  } else{
    return state;
  }
}

import { createStore} from 'redux';

const store = createStore(reducer);
export default store;

