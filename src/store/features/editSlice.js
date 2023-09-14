import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    edit: {
        width: -1,
        height: -1
    },
}

export const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers : {
        changeEditSize: (state, action) => {
            state.edit = {...action.payload}
        },
        resetEditSize: state => {
            state.edit = {
                width: -1,
                height: -1
            }
        }
    },
})

export const {changeEditSize, resetEditSize} = editSlice.actions

export default editSlice.reducer