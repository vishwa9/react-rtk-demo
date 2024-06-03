import { ordered as cakeOrdered } from '../cake/cakeSlice';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfIcecreams: 20
}

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecreams -= action.payload;
    },
    restoked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

export default iceCreamSlice.reducer
export const { ordered, restoked } = iceCreamSlice.actions;