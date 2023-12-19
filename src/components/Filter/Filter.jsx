import React from 'react';
import { useDispatch } from 'react-redux';
import { FilterDiv, FilterInput, Paragraph } from './Filter.styled';
import { filterChange } from '../../redux/contacts/filterSlice';

export default function Filter({ value }) {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <FilterDiv>
      <Paragraph>Find contacts by name:</Paragraph>
      <FilterInput
        onChange={handleFilterChange}
        value={value}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </FilterDiv>
  );
}
