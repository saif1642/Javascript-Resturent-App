import axios from 'axios';

async function getResults(query){
    try{
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const key = '72168958be9ff320473c32c60a20a9e6';
    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
    console.log(res);
    }catch(error){
        alert(error);
    }
}

getResults('pizza');