

let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          description: action.payload.description,
          resolved: false,
          id: ++lastId
        }
      ]
    case "bugRemoved":
      return state.filter(bug => bug.id !== action.payload.id)
    case "default":
      return state;
  }
}

export default reducer;