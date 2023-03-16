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
            <li> <NavLink to="/" className={({ isActive }) => isActive ? styles.linkActive : undefined}> Home</NavLink> </li>
            <li> <NavLink to="/about" className={({ isActive }) => isActive ? styles.linkActive : undefined} >About</NavLink> </li>
            <li> <NavLink to="/favorite"className={({ isActive }) => isActive ? styles.linkActive : undefined} >Favorite</NavLink> </li>               
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


