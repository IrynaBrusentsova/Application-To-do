// import styles from './Card.module.scss';
// import clsx from "clsx"; 
// import { useDispatch } from "react-redux"; 


// const Card = props => {
//     return (
//         <li className={styles.card}>{props.title}</li>   
//     );
// };
// export default Card;

// ===

import styles from "./Card.module.scss"; 
import { useDispatch } from "react-redux"; 
import { toggleCardFavorite, removeCard } from "../../redux/store"; 
import clsx from "clsx"; 
 
const Card = (props) => { 
    const dispatch = useDispatch(); 
    
    const toggle = () => { 
        dispatch(toggleCardFavorite(props.id)); 
    }; 
    // const remove = () => {
    //     console.log("removing card with id:", props.id);
    //     dispatch(removeCard(props.id));
    // }
 
    return ( 
        <li className={styles.card}> 
            <div className={styles.row}> 
                <div>{props.title} 
                </div> 
                <div> 
                    <button onClick={toggle} className={clsx(styles.button, props.isFavorite && styles.active)}>  
                    <span className="fa fa-star-o" /> 
                    </button>
                    
                    
                    {/* <button onClick={remove} className={clsx(styles.remove_button, props.isFavorite && styles.active)}>  </button> */}
                    <span className="fa fa-trash" /> 
                    
                </div> 
            </div> 
        </li> 
    ); 
  };

export default Card; 