import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsReducer';
import { useParams } from "react-router";



const ColumnForm = () => {
    const { listId } = useParams();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');


     const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addColumn({ listId, title, icon }));
        setTitle('');
        setIcon('');
      };

	return (
   <form onSubmit={handleSubmit}>
        <span>Title:</span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <span>Icon:</span><TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
        <Button>Add column</Button>
    </form>
	);
};

export default ColumnForm;


