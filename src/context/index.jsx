import { createContext, use, useState } from "react";
import { useNavigate } from 'react-router-dom';


export const GlobalContext = createContext(null);


export default function GlobalState({children}){
    const [searchParam, setSearchParam] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recipeDetails, setRecipeDetails] = useState('');
    const [favorite, setFavorite] = useState([]);

    const Navigate =useNavigate()
    async function handlesubmit(e) {
        e.preventDefault()
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=152edea2-7f1b-4334-a54e-3be9e32e1478`);
            const data = await response.json()
           if(data?.data?.recipes){
            setRecipes(data?.data?.recipes)
            setSearchParam('')
            setLoading(true)
            Navigate('/')
           }
console.log(recipes)
        } catch (error) {
            console.log(error)
            }}
function handleAddFavorite(getcurrentItem){
                
                let cpyFav =[...favorite]
                const index = cpyFav.findIndex((item)=>item.id ===getcurrentItem.id)

                if(index === -1){
                    cpyFav.push(getcurrentItem)         
                }
                else {
                    cpyFav.splice(index)
                }
               setFavorite(cpyFav)
            }
            console.log(favorite)
    return (
        <GlobalContext.Provider value={{searchParam, setSearchParam,handlesubmit,loading,recipes,recipeDetails, setRecipeDetails,favorite, setFavorite,handleAddFavorite}}>
            {children}
        </GlobalContext.Provider>
    );
}