import React from 'react'

const Pricing = ({plan}) => {
  return (
    <div className='card'>
        <h4>{plan.title}</h4>
        <h3>{plan.price}</h3>
        <ul>
           {
             plan.features.map((feature)=>(
                <li className={feature.available?"yes":"no"}><i className={`fa-solid ${feature.available?"fa-check" : "fa-xmark"}`}></i>{feature.text}</li>
            ))
           }
        </ul>
    </div>
  )
}
export default Pricing
