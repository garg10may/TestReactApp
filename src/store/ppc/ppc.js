import store from './store';
import * as actions from './actionTypes';
import { bugAdded, bugRemoved } from './actions';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed')
});

// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload: {
//     description: 'first bug'
//   }
// });

store.dispatch(bugAdded('First bug found'))
unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1
//   }
// })

store.dispatch(bugRemoved('Removed the bug'))
