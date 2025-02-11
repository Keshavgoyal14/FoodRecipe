import {Link} from 'react-router-dom'

const Recipelist = ({ item }) => {
  return (
    <div className='bg-yellow-100 p-4 grid grid-cols-1 justify-center items-center hover:shadow-2xl hover:border rounded-xl shadow-lg w-auto h-auto'>
      <img className='w-full h-60 rounded-2xl  items-center ' src={item?.image_url} alt="" />
      <div className='flex flex-col font-mono items-center font-bold p-1.5 m-0.5'>
        <h3 className='text-yellow-900'>{item.publisher}</h3>
        <h1 className='text-2xl text-center'>{item.title}</h1>
          <Link to={`/recipe-item/${item?.id}`} className='text-sm p-4 m-2 rounded-2xl uppercase tracking-wider inline-block bg-black font-mono  text-amber-50'>Details</Link>
      </div>
      
      
    </div>
  )
}

export default Recipelist