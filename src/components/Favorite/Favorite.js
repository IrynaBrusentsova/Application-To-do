
import Card from "../Card/Card";
import { getFavoriteCard } from "../../redux/cardsReducer";
import { useSelector } from "react-redux";
import styles from './Favorite.module.scss';
const Favorite = () => { 
 
   const cards = useSelector(getFavoriteCard); 
    
   return ( 
      <div> 
         <h1 className={styles.title}>Favorite</h1> 
         <div className={styles.favoriteColumn}> 
            <article className={styles.column}> 
               <ul className={styles.cards}> 
                  {cards.map((card) => ( 
                  <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} remove={card.remove} />))} 
               </ul> 
            </article> 
         </div> 
      </div> 
   ); 
}; 
export default Favorite;