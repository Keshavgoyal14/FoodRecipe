import {useContext,react} from 'react'
import { GlobalContext } from '../../context'
import Recipelist from '../../component/recipelist'
const Home = () => {
    const {recipes,loading} = useContext(GlobalContext)
  return (
    <div className='m-4 bg-yellow-50'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        { recipes && recipes.length>0?recipes.map((item)=>{
            return <Recipelist key={item.id} item={item} />

        }):null}</div>
    </div>
  )
}

export default Home