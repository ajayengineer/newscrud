import React from 'react'
import Pagination from './Pagination'
import Search from './Search'
import Stories from './Stories'

const App = () => {
  return (
    <React.Fragment>
      <Search />
      <Pagination />
      <Stories />
    </React.Fragment>
  )
}

export default App