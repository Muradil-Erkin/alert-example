const alertReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ALERT':
      return [...state, action.payload];
    case 'REMOVE_ALERT':
      return state.filter((alert) => alert.id !== action.payload.id);
    default:
      return state;
  }
};

export default alertReducer;
