import React from 'react'

const Form = ({location, setLocation, handleSubmit,handleClick, fetchData}) => {
  return (
    <div className='aaa'>
        <form className='search' onSubmit={handleSubmit}>
            {/* <label htmlFor='search'>Search</label> */}
            <input
                autoFocus
                type='text'
                placeholder='Enter Your City'
                value={location}
                onChange={event => setLocation(event.target.value)}
            />
            <input
                type='submit'
                value='Search'
                onClick={fetchData}
            />
            
        </form>
    </div>
  )
}

export default Form