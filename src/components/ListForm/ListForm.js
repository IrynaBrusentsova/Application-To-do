
import { useState } from 'react';
import Button from "../Button/Button";
import styles from '../ColumnForm/ColumnForm.module.scss';
import TextInput from '../TextInput/TextInput';

import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import { useParams } from "react-router";



const ListForm = () => {
    const { listId } = useParams();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addList({ listId, title, description }));
        setTitle('');
        setDescription('');
    };


return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span>
     <TextInput input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
     
     <span>Description:</span> 
      <TextInput input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
      
      <Button>Add List</Button>
    </form>
  );

};

export default ListForm;





// ===



