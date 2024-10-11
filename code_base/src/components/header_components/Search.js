import React from 'react'

const Search = () => {
  return (
    <>
      <div className='search-container'>
        <div className='search-icon'>
            <i className='bi bi-search'></i>
        </div>
        <div className='search-input'>
            <input
                type='text'
                name='search-place'
                placeholder='Search location...'
            >
            </input>
        </div>
      </div>
    </>
  )
}

export default Search
