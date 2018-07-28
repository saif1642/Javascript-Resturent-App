import axios from 'axios';
export default class Search{
    constructor(query){
        this.query = query;
    }
    async getResults(){
        try{
        const proxy = 'https://cors.io/?';
        const key = '72168958be9ff320473c32c60a20a9e6';
        const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.result = res.data.recipes;
        //console.log(this.result);
        }catch(error){
            alert(error);
        }
    }
}
