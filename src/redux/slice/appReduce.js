import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tabHome:"tab1",
 
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTabHome:(states,action) =>{
      states.tabHome = action.payload;
    }
  }
});

export const {
  setTabHome
} = appReducer.actions;
export default appReducer.reducer;
