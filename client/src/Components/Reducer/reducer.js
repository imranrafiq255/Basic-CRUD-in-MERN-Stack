import { createReducer } from "@reduxjs/toolkit";

const initialValue = {};

const studentReducer = createReducer(initialValue, {
  studentRequest: (state, action) => {
    state.loading = true;
  },
  studentSuccess: (state, action) => {
    state.loading = false;
    state.students = action.payload;
  },
  studentFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
export default studentReducer;
