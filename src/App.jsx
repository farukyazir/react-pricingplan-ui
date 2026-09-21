import React from 'react'
import './App.css'
import Pricing from './components/Pricing'
import pricingplans from'./data/pricingData'
const App = () => {
  return (
    <div className='container'>
      <div className='card-container'>
        {
          pricingplans.map(plan => (
            <Pricing key={plan.id} plan={plan} />
          ))
        }
      </div>
    </div>
  )
}

export default App
