# fg-reactjs-paginator

> A ReactJS component to render a pagination with logic like Google's search results.

[![NPM](https://img.shields.io/npm/v/fg-reactjs-paginator)](https://www.npmjs.com/package/fg-reactjs-paginator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save fg-reactjs-paginator
```

## Example of usage
#### You can see the component in action on [Github Pages.](https://francisgregori.github.io/fg-reactjs-paginator/)

```tsx
import React, { useState } from 'react'
import ReactPaginator from 'fg-reactjs-paginator'
import 'fg-reactjs-paginator/dist/index.css'

import dummyData from './dummy-data'

const App = () => {
  const [filteredItems, setFilteredItems] = useState<Array<any>>([])

  return (
    <div>
      {filteredItems.length > 0 && (
        <ul>
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
      />
    </div>
  )
}

export default App

```
## Overriding component classes

```tsx
<ReactPaginator
  ...
  classes={{
    container: "container-class",
    button: "button-class",
    disabled: "disabled-class",
    active: "active-class",
  }}
  ...
/>

/* Example of structure with classes */
<ul className='container-class'>
  <li>
    {/*Standard button*/}
    <button className='button-class'>...</button>
  </li>
  <li>
    {/*Disabled button*/}
    <button className='button-class disabled-class'>...</button>
  </li>
  <li>
    {/*Active button*/}
    <button className='button-class active-class'>...</button>
  </li>
</ul>
```


## Props

| Name                     | Type       | Description                                                                                  |
| ------------------------ | ---------- | -------------------------------------------------------------------------------------------- |
| `items`                  | `Number`   | **Required.** Array of items to be paged.                                                     |
| `handleFilteredItems`    | `Function` | **Required.** Function that will receive filtered items.                                    |
| `itemsPerPage`           | `Number`   | Number of items returned per page.                                                             |
| `paginationSize`         | `Number`   | Number of buttons shown on the pagination.                                                             |
| `previousLabel`          | `Node`     | Label for the `previous` button.                                                             |
| `nextLabel`              | `Node`     | Label for the `next` button.                                                                 |
| `firstLabel`             | `Node`     | Label for the `first` button.                                                                 |
| `lastLabel`              | `Node`     | Label for the `last` button.                                                                 |
| `initialPage`            | `Number`   | The initial page selected.                                                                   |
| `classes`                | `Object`   | Object to override component classes                                                             |

## Contribute

1. [Submit an issue](https://github.com/FrancisGregori/fg-reactjs-paginator/issues)
2. Fork the repository
3. Create a dedicated branch (never ever work in `master`)
4. Fix bugs or implement features

## Author
* Francis Gregori
* [https://www.linkedin.com/in/francisgregori/](https://www.linkedin.com/in/francisgregori/)
* [Follow me on github!](https://github.com/FrancisGregori)

## License

MIT © [FrancisGregori](https://github.com/FrancisGregori)
