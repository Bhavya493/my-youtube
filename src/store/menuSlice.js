import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'Menus',
    initialState: {
        isMenuOpen: true,
        watchVideoContent: null
    },
    reducers: {
        toggleMenu(state) {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu(state) {
            state.isMenuOpen = false
        },
        addVideoContent(state, action) {
            state.watchVideoContent = action.payload
        }
    }
});

export const {toggleMenu, closeMenu, addVideoContent} = menuSlice.actions;
export default menuSlice.reducer