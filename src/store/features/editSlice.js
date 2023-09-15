import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    edit: {
        width: 1200,
        height: 750
    },
}

export const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers : {
        changeEditSize: (state, action) => {
            state.edit = {
                width: action.payload.width > 0 ? action.payload.width : initialState.edit.width,
                height: action.payload.height > 0 ? action.payload.height : initialState.edit.height
            }
        },
        resetEditSize: state => {
            state.edit = initialState
        }
    },
})

export const {changeEditSize, resetEditSize} = editSlice.actions

export default editSlice.reducer