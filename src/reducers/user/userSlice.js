import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  password: "",
  token: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    // Login
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
    },
    // Logout
    unsetUser: (state) => {
      state.email = "";
      state.password = "";
      state.token = "";
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;