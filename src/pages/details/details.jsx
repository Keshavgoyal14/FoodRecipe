import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context'

const Details = () => {
  const params = useParams();
  const { recipeDetails, setRecipeDetails, favorite, handleAddFavorite } = useContext(GlobalContext)


  useEffect(() => {
    async function getRecipeDetails() {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`)
      const data = await res.json()
      console.log(data)
      setRecipeDetails(data?.data?.recipe)
    }
    getRecipeDetails()
  }
    , [])
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-2 m-4 bg-yellow-50 p-2 m-2'>
      <div className='place-items-center'><img className='w-[550px]  outline-2  shadow-2xl rounded-2xl focus:outline-amber-300 ' src={recipeDetails.image_url} alt="Image Not Found" />
      </div>
      <div>
        <div className='p-4 font-bold font-mono'>
          <h1 className='text-amber-900'>{recipeDetails.publisher}</h1>
          <h3 className='text-3xl mt-2.5'>{recipeDetails.title}</h3>
        </div>
        <div className='m-4 '><button onClick={() => handleAddFavorite(recipeDetails)} className='bg-black text-amber-50 font-bold font-sans hover:drop-shadow-xl hover:bg-orange-800 rounded-2xl p-3 uppercase hover:cursor-pointer'>{
        favorite && favorite.length>0 && favorite.findIndex(
          (item)=>item.id===recipeDetails.id)!==-1
         ?"Remove from Favorites":"Add to Favorite" }</button></div>
        <div className='p-4'>
          <span className='text-2xl mb-2 font-extrabold uppercase '>Ingredients:</span>
          <ul className='list-disc list-inside mt-3.5 flex flex-col gap-3'>
            {recipeDetails?.ingredients?.map((item, index) => {
              return <li className='mt-1 font-semibold uppercase' key={index}>{item.quantity} {item.unit}- {item.description}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details