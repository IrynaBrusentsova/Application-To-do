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
            <li><a href="/about">Home</a></li>
            <li>Home</li>
            <li>Favorite</li>
            <li>About</li>
        </ul>
     
        </div>

      </div>
    </nav>
  );
};

export default NavBar;


