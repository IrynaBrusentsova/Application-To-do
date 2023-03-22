
import styles from "./Card.module.scss"; 
import { useDispatch } from "react-redux"; 
import { toggleCardFavorite, removeCard } from "../../redux/cardsReducer"; 
import clsx from "clsx"; 
 
const Card = (props) => { 
    const dispatch = useDispatch(); 
    
    const toggle = () => { 
        dispatch(toggleCardFavorite(props.id)); 
    }; 
    const remove = () => {
        const payload = props.id;
        dispatch(removeCard(payload));
        console.log("removing card with id:", props.id);        
    }
 
    return ( 
        <li className={styles.card}> 
            <div className={styles.row}> 
                <div>{props.title} 
                </div> 
                <div> 
                    <button onClick={toggle} className={clsx(styles.button, props.isFavorite && styles.active)}> 
                    <span className="fa fa-star-o" /> 
                    </button> 
                </div> 
                <div>
                    <button onClick={remove} className={clsx(styles.remove_button, props.isFavorite && styles.active)}> 
                    <span className="fa fa-trash" /> 
                    </button> 
                </div>
            </div> 
        </li> 
    ); 
  };

export default Card; 
