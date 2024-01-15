import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import {getRecipes} from '../services/api.js';
import { useEffect, useState } from "react";

const Recipes = () => {

    const[searchedRes, setSearchedRes] = useState('pizza');
    const[recipes, setRecipes] = useState([]);

    // since in api it returns recipes in array format.
      
    useEffect(()=>{
        getSearches();
    }, [searchedRes]);
    

    const getSearches=async ()=>{
        let result = await getRecipes(searchedRes);
        if(result && result.recipes){
            setRecipes(result.recipes);
        }
    }

   

    return(
        <>
        <Search setSearchedRes = {setSearchedRes}/>
        <RecipeList recipes={recipes} searchedRes={searchedRes}/>
        </>
    )
}

export default Recipes;