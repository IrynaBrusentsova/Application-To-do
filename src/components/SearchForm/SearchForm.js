
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import { updateSearch } from '../../redux/searchStringReducer';


const SearchForm = ({searchString}) => {
    const [searchLet, setSearchLet] = useState(searchString);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
        dispatch(updateSearch(""));
        };
        }, [dispatch]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearch(searchLet));
        setSearchLet('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..." 
            value={searchLet} 
            onChange={(e) => setSearchLet(e.target.value)}
            />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };


  export default SearchForm;




