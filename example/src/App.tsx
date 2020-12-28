import React, { useState, useEffect, useCallback } from 'react'
import ReactPaginator from 'fg-reactjs-paginator'
import useDebounce from './useDebounce'
import 'fg-reactjs-paginator/dist/index.css'

import dummyData from './dummy-data'

const App = () => {
  const [items, setItems] = useState<Array<any>>([])
  const [search, setSearch] = useState('')
  const [filteredItems, setFilteredItems] = useState<Array<any>>([])
  const debounceSearch = useDebounce(search, 1000)

  const handleSearch = useCallback(async () => {
    let results = dummyData
    if (search !== '') {
      const s = new RegExp(search, 'i')
      results = await dummyData.filter((item) => item.text.match(s))
    }
    setItems(results)
  }, [debounceSearch])

  useEffect(() => {
    handleSearch()
  }, [debounceSearch])

  return (
    <div className='reactJsPaginatorExample'>
      <h1>FG React JS Paginator</h1>
      <input
        className='w-full bg-transparent outline-none focus:outline-none'
        placeholder='Search'
        type='text'
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredItems.length > 0 && (
        <ul className='listExample'>
          {filteredItems.map((item) => (
            <li>{item.text}</li>
          ))}
        </ul>
      )}

      <ReactPaginator
        items={items}
        itemsPerPage={10}
        handleFilteredItems={setFilteredItems}
        paginationSize={5}
        showFirstAndLastButtons={false}
      />
    </div>
  )
}

export default App
