
import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
// 13.6
// import {getAllColumns} from '../../redux/store';
// 14.2 
import {getListById} from '../../redux/store';
import {getColumnsByList} from '../../redux/store';
import { useParams } from "react-router";

const List = () => {
	const { listId } = useParams();
	const listData = useSelector(state => getListById(state, listId));
	const columns = useSelector(state => getColumnsByList(state, listId));
	


	return (
		<div className={styles.list}>
		  <header className={styles.header}>
			<h2 className={styles.title}>Things to do<span>soon!</span></h2>
		  </header>
		  <p className={styles.description}>Interesting things I want to check out</p>
		  <section className={styles.columns}>
			{columns.map(column =>
			  <Column
				key={column.id}
				{...column}  />
			)}
		  </section>
		  <ColumnForm />
		</div>
	  );
};

export default List;