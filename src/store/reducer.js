const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      }
    case 'ADITION':
      return {
        counter: state.counter + action.val
      }
    case 'SUBSTRACTION':
      return {
        counter: state.counter - action.val
      }
  }
  return state;
};

export default reducer;
