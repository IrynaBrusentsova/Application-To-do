// import shortid from "shortid";

//   const cardsReducer = (statePart = [], action) => {
//     switch(action.type) {
//       case 'ADD_CARD':
//         return [...statePart, { ...action.payload, id: shortid() }];
//       case 'TOGGLE_CARD_FAVORITE':
//         return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);       
  
//       default:
//         return statePart;
//     }
//   }
//    export default cardsReducer;


//    ==
import shortid from "shortid";
import strContains from '../utils/strContains';


//selector 
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getFavoriteCard = (state) => state.cards.filter((card) => card.isFavorite === true);

//action
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName ('TOGGLE_CARD_FAVORITE');
// delete card
const REMOVE_CARD = createActionName('REMOVE_CARD');

//action creators
export const addCard =  payload => ({type: ADD_CARD, payload: {...payload, isFavorite: false}}) ;
export const toggleCardFavorite = (payload) => ({ type: TOGGLE_CARD_FAVORITE, payload});
// delete card
export const removeCard = payload => ({type: REMOVE_CARD, payload: {...payload}});

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case TOGGLE_CARD_FAVORITE:
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card); 
        case REMOVE_CARD:
        return statePart.filter((card) => card.id !== action.payload.id)      
  
      default:
        return statePart;
    }
  }


   export default cardsReducer;