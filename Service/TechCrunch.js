import axios from 'axios';
import {articles_url,_api_key,categoryt,country_code} from '../utils/test_config'



export async function getArticles(){
    try{
let articles=await axios.get(`${articles_url}?sources=${categoryt}&apiKey=${_api_key}`,
)


return articles.data.articles
    }
    catch(error){
throw error;
    }

}