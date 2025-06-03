import { createSlice } from "@reduxjs/toolkit";

const savedContacts = JSON.parse(localStorage.getItem("contacts")) ?? [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: savedContacts,
  },
  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter((contact) => contact.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
