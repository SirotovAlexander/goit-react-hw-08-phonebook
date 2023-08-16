import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(
    'https://64d753752a017531bc1323d8.mockapi.io/contacts'
  );
  return response.data;
});

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(
      `https://64d753752a017531bc1323d8.mockapi.io/contacts/${id}`
    );
    return response.data;
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    const response = await axios.post(
      `https://64d753752a017531bc1323d8.mockapi.io/contacts/`,
      contact
    );
    return response.data;
  }
);
