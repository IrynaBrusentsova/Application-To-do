
//action
const createActionName = actionName => `app/searchString/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName ('UPDATE_SEARCHSTRING');

export const searchString = (state) => state.searchString;
export const updateSearch = payload => ({type: UPDATE_SEARCHSTRING, payload});

  const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHSTRING:
        return action.payload
      default:
        return statePart;
    }
  }
  export default searchStringReducer;