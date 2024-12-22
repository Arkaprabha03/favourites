import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
}
const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFavourite(state, action) {
            state.items.push(action.payload);
        },
        removeFavourite(state, action){
            state.items = state.items.filter((item, index) => index !== action.payload  );
        },
        clearFavourites(state){
            state.items = [];
        }
    }
})
export const {addFavourite,removeFavourite,clearFavourites}=favouritesSlice.actions;
export default favouritesSlice.reducer;