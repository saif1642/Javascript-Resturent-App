import { domElements } from './base';

export const getInput = () => domElements.searchInput.value;
export const clearInput = () => {
    domElements.searchInput.value = '';
};

export const clearResults = () => {
   domElements.searchResults.innerHTML = '';
};

const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="Test">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;

    domElements.searchResults.insertAdjacentHTML('beforeend',markup);

}

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
}