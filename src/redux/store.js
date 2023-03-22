
import { legacy_createStore as createStore, combineReducers } from "redux";
import initialState from './initialState';
// 14.5
import listsReducer from './listsRedux';
import columnsReducer from "./columnsReducer";
import cardsReducer from "./cardsReducer";
import searchStringReducer from "./searchStringReducer";


  // const reducer = (state, action) => {
  //   switch(action.type) {
  //     // case 'ADD_COLUMN':
  //     //   return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};

  //     // case 'ADD_CARD':  
  //     //   return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};

  //     // case 'UPDATE_SEARCHSTRING':
  //     //     return { ...state, searchString: action.payload };
          
  //     //  case 'ADD_LIST':
  //     //       return{ ...state,
  //     //         lists: [...state.lists, {...action.payload, id: shortid()}]
  //     //       };

  //     //  case 'TOGGLE_CARD_FAVORITE':
  //     //         return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) }; 

  //     default:
  //       return state;
  //   }
  // };

  const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
  }
  
  const reducer = combineReducers(subreducers);

  // ==14.5
  // const reducer = (state, action) => {
  //   const newState = {
  //     lists: listsReducer(state.lists, action),
  //     columns: columnsReducer(state.columns, action),
  //     cards: cardsReducer(state.cards, action),
  //     searchString: searchStringReducer(state.searchString, action)
  //   };
  
  //   return newState;
  // };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;