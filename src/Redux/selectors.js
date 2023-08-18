import { createSelector } from '@reduxjs/toolkit';
//////// Contacts-State
export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

//////// Filter-State
export const selectFilterValue = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (items, filter) =>
    items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
);
//////// Auth-State
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLogged = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
