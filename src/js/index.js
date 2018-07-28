import Search from './models/Search';
/** Global State of the Object
 * - Search object
 * - current recipee object
 * - shopping list object
 * - Liked object
 */

const state = {};

const searchController = async ()=>{
    //1.Get Query from the view
    const query = 'pizza';
    if(query){
        //2. New search object and add to state
        state.search = new Search(query);
        //3. prepare UI for results
        //4. Search for recipee
        await state.search.getResults();
        //5. output result to UI
        console.log(state.search.result);
    }
}


document.querySelector('.search').addEventListener('submit',e=>{
    e.preventDefault();
    searchController();
})