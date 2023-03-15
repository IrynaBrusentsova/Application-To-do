import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";



const NavBar = () => {
  return (
    <nav>
      <div className={styles.container}>

        <div className={styles.menu}>
           <div className={styles.homeIcon}>
             <span className="fa fa-tasks"></span>
           </div>
            
          <ul>
            <li> <NavLink to="/" > Home</NavLink> </li>
            <li> <NavLink to="/about" >About</NavLink> </li>
            <li> <NavLink to="/favorite" >Favorite</NavLink> </li>               
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


