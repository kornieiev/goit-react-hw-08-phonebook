import React, { useState } from 'react';
import {
  SaveButton,
  CancelButton,
  InputChange,
  DivChangeWrap,
  EditFormForm,
} from './EditForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

export default function EditForm(props) {
  const contacts = useSelector(selectContacts);

  const [editName, setEditName] = useState(props.item.name);
  const [editNumber, setEditNumber] = useState(props.item.number);

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setEditName(e.target.value);

        break;
      case 'number':
        setEditNumber(e.target.value);

        break;
      default:
        console.log(`Unknown input ${editName}`);
    }
  };
  const handleBtnSave = () => {
    const newContact = {
      id: props.item.id,
      name: editName,
      number: editNumber,
    };
    if (
      contacts.contacts.find(contact => {
        return contact.name.toLowerCase() === newContact.name.toLowerCase();
      })
    ) {
      alert(newContact.name + ' is already in contacts.');
      return;
    } else {
      dispatch(editContact(newContact));
      props.setEdit('');
    }
  };
  const handleBtnCancel = e => {
    props.setEdit('');
  };

  return (
    <div>
      <DivChangeWrap>
        <EditFormForm onSubmit={handleBtnSave}>
          <InputChange
            type="text"
            value={editName}
            name="name"
            onChange={handleChange}
          />
          <InputChange
            type="text"
            value={editNumber}
            name="number"
            onChange={handleChange}
          />
          <SaveButton value={props.item.id} type="submit">
            Save
          </SaveButton>
        </EditFormForm>
        <CancelButton
          value={props.item.id}
          type="button"
          onClick={handleBtnCancel}
        >
          Cancel
        </CancelButton>
      </DivChangeWrap>
    </div>
  );
}
