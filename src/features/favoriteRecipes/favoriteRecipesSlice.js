import { createSlice } from "@reduxjs/toolkit";
const configurations = {
name: 'favoriteRecipes',
initialState: [],
reducers: {
addFavoriteRecipe: (state, action) => {
state.push(action.payload);
},
removeFavoriteRecipe: (state, action) => {
return state.filter(recipe => recipe.name !== action.payload.name);
}
}
}
export const favoriteRecipesSlice = createSlice(configurations);
export const {
addFavoriteRecipe,
removeFavoriteRecipe
} = favoriteRecipesSlice.actions
