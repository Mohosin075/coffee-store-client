
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loaddedCoffees = useLoaderData();
 const [coffees, setCoffees]  = useState(loaddedCoffees)

  return (
    <>
      <h1 className='text-center text-6xl text-purple-700'>coffee store {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-4'>
        {
          coffees.map(coffee=><CoffeeCard 
            key={coffee._id} 
            coffee={coffee} 
            coffees={coffees} 
            setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
