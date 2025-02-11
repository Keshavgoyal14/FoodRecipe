import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context'
import Recipelist from '../../component/recipelist'


const Favorites = () => {
  const {favorite} = useContext(GlobalContext)
  return (
    <div className='m-4 bg-yellow-50 p-6 rounded-lg shadow-lg'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        { favorite && favorite.length > 0 ? favorite.map((item) => {
            return <Recipelist key={item.id} item={item} />
        }) : (
          <div className='text-2xl text-center col-span-full'>
            <p>Nothing is Added To List</p>
          </div>
        )}
        </div>
    </div>
  )
}

export default Favorites