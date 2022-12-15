import { FilterLabelStyles, FilterInputStyles } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filterName = useSelector(getContactsFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    let searchName = e.target.value;
    dispatch(setFilter(searchName.toLowerCase()));
  };

  return (
    <FilterLabelStyles>
      Find contacts by name
      <FilterInputStyles
        type="text"
        value={filterName}
        onChange={changeFilter}
        placeholder="Name..."
      />
    </FilterLabelStyles>
  );
};
