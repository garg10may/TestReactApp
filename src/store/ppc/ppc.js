import store from './store';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed')
});

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'first bug'
  }
});

unsubscribe();

store.dispatch({
  type: 'bugRemoved',
  payload: {
    id: 1
  }
})


