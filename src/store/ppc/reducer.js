import * as actions from './actionTypes';

let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          description: action.payload.description,
          resolved: false,
          id: ++lastId
        }
      ]
    case actions.BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id)
    case "default":
      return state;
  }
}

export default reducer;