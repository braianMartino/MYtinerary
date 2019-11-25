const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case "READ_CITY":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default citiesReducer;
