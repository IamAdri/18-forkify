import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////



const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    //1)Loading the recipe
    await model.loadRecipe(id);
  
    //2)Rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
   // alert(err);
   console.error(`${err.message}: ${err.stack}`);
   recipeView.renderError();
  }
};

const init = function() {
  recipeView.addHandlerRender(controlRecipes)
}

init();