import React from 'react'

const Weather = ({data}) => {

  return (
    <div>
        
        {data.main ?<h1>{data.main.temp}°K </h1> : null} 
    </div>
  )
}

export default Weather