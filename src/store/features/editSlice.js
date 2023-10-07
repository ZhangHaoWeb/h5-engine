import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    edit: {
        width: 375,
        height: 750
    },
    componentList: []
}

export const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers : {
        changeEditSize: (state, action) => {
            state.edit = {
                width: action.payload.width && Number(action.payload.width),
                height: action.payload.height && Number(action.payload.height)
            }
        },
        resetEditSize: state => {
            state.edit = initialState
        },
        addComponent: (state, action) => {
            state.componentList = [
                ...state.componentList,
                action.payload
            ]
        }
    },
})

export const {changeEditSize, resetEditSize, addComponent} = editSlice.actions

export default editSlice.reducer