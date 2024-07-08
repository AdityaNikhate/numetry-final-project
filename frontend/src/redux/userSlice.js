import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        authUser:null,
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.authUser = action.payload;
        },
        emptyAuthUser:(state, action)=>{
            state.authUser = null;
        }
    }
});
export const {setAuthUser, emptyAuthUser} = userSlice.actions;
export default userSlice.reducer;