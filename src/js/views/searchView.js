import { domElements } from './base';

export const getInput = () => domElements.searchInput.value;
export const clearInput = () => {
    domElements.searchInput.value = '';
};

export const clearResults = () => {
   domElements.searchResults.innerHTML = '';
};

const limitReciepeTitle = (title ,limit=17)=>{
    const newTitle = [];
    if(title.length > limit){
        title.split(' ').reduce((acc , currentWord)=>{
            if(acc+currentWord.length <= limit){
                newTitle.push(currentWord);
            }
            return acc+currentWord.length;
        },0);

        return `${newTitle.join(' ')} ...`;

    }

    return title;
}

const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="Test">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitReciepeTitle(recipe.title)}</h4>
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