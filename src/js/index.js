import Search from './models/Search';
import * as searchView from './views/searchView';
import { domElements, renderLoader ,clearLoader} from './views/base';
/** Global State of the Object
 * - Search object
 * - current recipee object
 * - shopping list object
 * - Liked object
 */

const state = {};

const searchController = async ()=>{
    //1.Get Query from the view
    const query = searchView.getInput();
    if(query){
        //2. New search object and add to state
        state.search = new Search(query);
        //3. prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(domElements.searchRes);

        //4. Search for recipee
        await state.search.getResults();
        //5. output result to UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}


domElements.searchForm.addEventListener('submit',e=>{
    e.preventDefault();
    searchController();
})