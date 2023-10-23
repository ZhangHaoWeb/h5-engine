import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    edit: {
        width: 375,
        height: 750
    },
    currentComponent: -1,
    componentList: []
}

export const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
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
            state.currentComponent = state.componentList.length - 1
        },
        editComponentStyle: (state, action) => {
            const idx = action.payload.idx
            state.componentList[idx].style = {
                ...state.componentList[idx].style,
                ...action.payload.style
            }
            state.currentComponent = idx
        },
        changeCurrentComponent: (state, action) => {
            state.currentComponent = action.payload
        }
    },
})

export const {
    changeEditSize,
    resetEditSize, addComponent,
    editComponentStyle,
    changeCurrentComponent
} = editSlice.actions

export default editSlice.reducer