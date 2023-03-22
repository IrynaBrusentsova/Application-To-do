import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
// new
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsReducer';


const CardForm = props => {
    // new
    const {columnId} = props;

    // new
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

     const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ title, columnId }));
        setTitle('');   
     };
     
    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>

        </form>
    );
};

export default CardForm