import { useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/FilterSlice/FilterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div>
      <input
        className={css.filter__input}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
