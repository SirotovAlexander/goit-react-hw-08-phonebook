export const handlePending = state => {
  state.loading = true;
};

export const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.error;
};

export const handleFetchFulfilled = (state, action) => {
  state.loading = false;
  state.error = null;
  state.items = action.payload;
};

export const handleAddFulfilled = (state, action) => {
  state.items.push(action.payload);
  state.loading = false;
  state.error = null;
};

export const handleDellFulfilled = (state, action) => {
  state.items = state.items.filter(item => item.id !== action.payload.id);
  state.loading = false;
  state.error = null;
};

export const handleUpdateFulfilled = (state, action) => {
  state.items = state.items.map(item =>
    item.id !== action.payload.id ? item : action.payload
  );
  state.loading = false;
  state.error = null;
};

export const handleRegisterUserFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const handleLogInFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const handleLogOutFulfilled = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleGetCurrentPending = (state, action) => {
  state.isRefreshing = true;
};

export const handleGetCurrentFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleGetCurrentRejected = (state, action) => {
  state.isRefreshing = false;
};
