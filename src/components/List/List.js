
import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';

import { useSelector } from 'react-redux';
// 13.6
// import {getAllColumns} from '../../redux/store';
// 14.2 
import {getListById} from '../../redux/store';
import {getColumnsByList} from '../../redux/store';
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";


const List = () => {
	const { listId } = useParams();
	const listData = useSelector(state => getListById(state, listId));
	const columns = useSelector(state => getColumnsByList(state, listId));

	if(!listData) return <Navigate to="/" />
	

	return (
		<div className={styles.list}>
		  <header className={styles.header}>
			<h2 className={styles.title}> {listData.title}</h2>
		  </header>
		  
		  <p className={styles.description}>{listData.description}</p>
		  <SearchForm />
		  <section className={styles.columns}>
			{columns.map(column =>
			  <Column
				key={column.id}
				{...column}  />
			)}
		  </section>
		  <ColumnForm  listId={listId}/>
		 

		</div>
	  );
};

export default List;


// ==
// import styles from './List.module.scss';
// import Column from '../Column/Column.js';
// import ColumnForm from '../ColumnForm/ColumnForm';
// import { useSelector } from 'react-redux';
// import { getListById } from '../../redux/store';
// import { getColumnsByList } from '../../redux/store';
// import { useParams } from 'react-router';
// import SearchForm from './../SearchForm/SearchForm';

// const List = () => {

// const { listId } = useParams();
// //const listId = 1; 
// const columns = useSelector(state => getColumnsByList(state, listId));
// const listData = useSelector(state => getListById(state, listId));
// const searchString = useSelector(state => state.searchString);
  

//   return (
//     <div className={styles.list}>
//       <header className={styles.header}>
//         <h2 className={styles.title}>
//           {listData.title}
//         </h2>
//       </header>
//       <p className={styles.description}>
//         {listData.description}
//       </p>
//       <SearchForm searchString={searchString}/>
//       <section className={styles.columns}>
//         {columns.map((column) => (
//           <Column key={column.id} {...column} />
//         ))}
//       </section>
//       <ColumnForm listId={listId} />  
//     </div>
//   );
// };

// export default List;