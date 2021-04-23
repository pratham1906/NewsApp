import axios from 'axios';
import {articles_url,_api_key,categoryb,country_code} from '../utils/test_config'



export async function getArticles(){
    try{
let articles=await axios.get(`${articles_url}?country=${country_code}&category=${categoryb}&apiKey=${_api_key}`,
)


return articles.data.articles
    }
    catch(error){
throw error;
    }

}