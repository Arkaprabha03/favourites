import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../features/FavouritesSlice"

export const store=configureStore({
    reducer:{
        favourites:favouritesReducer
    }
}
)
