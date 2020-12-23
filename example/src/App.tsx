import React, { useState } from 'react'
import ReactPaginator from 'fg-reactjs-paginator'
import 'fg-reactjs-paginator/dist/index.css'

import dummyData from './dummy-data'

const App = () => {
  const [filteredItems, setFilteredItems] = useState<Array<any>>([])

  return (
    <div className='reactJsPaginatorExample'>
      <h1>FG React JS Paginator</h1>
      {filteredItems.length > 0 && (
        <ul className='listExample'>
          {filteredItems.map((item) => (
            <li>{item.text}</li>
          ))}
        </ul>
      )}

      <ReactPaginator
        items={dummyData}
        itemsPerPage={10}
        handleFilteredItems={setFilteredItems}
        paginationSize={5}
        showFirstAndLastButtons={false}
      />
    </div>
  )
}

export default App
