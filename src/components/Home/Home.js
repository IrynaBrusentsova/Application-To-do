import SearchForm from "../SearchForm/SearchForm";
import Hero from "../Hero/Hero.js";
import List from "../List/List.js";
import About from "../About/About";
import Favorite from "../Favorite/Favorite";



const Home = () => {
    return(
        <div>
            <Hero />
            <SearchForm />
            <List />
            <About/>
            <Favorite/>
        </div>
        
    );
};
export default Home;