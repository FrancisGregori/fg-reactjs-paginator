import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

interface ReactPaginatorClasses {
  container?: string
  button?: string
  disabled?: string
  active?: string
}

interface ReactPaginatorProps {
  items: Array<any>
  handleFilteredItems(items: Array<any>): any
  itemsPerPage?: number
  paginationSize?: number
  initialPage?: number
  firstLabel?: string
  lastLabel?: string
  previousLabel?: string
  nextLabel?: string
  classes?: ReactPaginatorClasses
}

const ReactPaginator: React.FC<ReactPaginatorProps> = ({
  items,
  handleFilteredItems,
  itemsPerPage = 10,
  paginationSize = 10,
  initialPage,
  firstLabel = 'First',
  lastLabel = 'Last',
  previousLabel = 'Previous',
  nextLabel = 'Next',
  classes
}): React.ReactElement | null => {
  const [totalPages, setTotalPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(initialPage || 1)
  const [pages, setPages] = useState<Array<number> | null>(null)

  const buttonClass =
    classes && classes.button ? classes.button : styles.reactPaginator__button
  const disabledClass =
    classes && classes.disabled
      ? classes.disabled
      : styles.reactPaginator__buttonDisabled
  const activeClass =
    classes && classes.active
      ? classes.active
      : styles.reactPaginator__buttonActive

  const handlePaginator = () => {
    if (totalPages > 0) {
      let startPage: number, endPage: number
      if (totalPages <= paginationSize) {
        startPage = 1
        endPage = totalPages
      } else {
        const halfPagination = Math.round(paginationSize / 2)
        if (currentPage <= halfPagination + 1) {
          startPage = 1
          endPage = paginationSize
        } else if (currentPage + (halfPagination - 1) >= totalPages) {
          startPage = totalPages - (paginationSize - 1)
          endPage = totalPages
        } else {
          startPage = currentPage - halfPagination
          endPage = currentPage + (halfPagination - 1)
        }
      }

      const pgs = Array(endPage + 1 - startPage)
        .fill(0)
        .map((_, i) => startPage + i)
      setPages(pgs)
    }
  }

  useEffect(() => {
    setTotalPages(Math.ceil(items.length / itemsPerPage))
  }, [])

  useEffect(() => {
    handlePaginator()
  }, [totalPages, currentPage])

  useEffect(() => {
    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage - 1, items.length - 1)

    // get new page of items from items array
    const paginatedItems = items.slice(startIndex, endIndex + 1)

    handleFilteredItems(paginatedItems)
  }, [currentPage])

  return (
    pages && (
      <ul
        className={
          classes && classes.container
            ? classes.container
            : styles.reactPaginator
        }
      >
        <li>
          <button
            className={`${buttonClass} ${
              currentPage === 1 ? disabledClass : ''
            }`}
            type='button'
            onClick={() => setCurrentPage(1)}
          >
            {firstLabel}
          </button>
        </li>
        <li>
          <button
            className={`${buttonClass} ${
              currentPage === 1 ? disabledClass : ''
            }`}
            type='button'
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
              }
            }}
          >
            {previousLabel}
          </button>
        </li>
        {pages.map((page, index) => (
          <li key={index}>
            <button
              className={`${buttonClass} ${
                currentPage === page ? activeClass : ''
              }`}
              type='button'
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`${buttonClass} ${
              currentPage === totalPages ? disabledClass : ''
            }`}
            type='button'
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1)
              }
            }}
          >
            {nextLabel}
          </button>
        </li>
        <li>
          <button
            className={`${buttonClass} ${
              currentPage === totalPages ? disabledClass : ''
            }`}
            type='button'
            onClick={() => setCurrentPage(totalPages)}
          >
            {lastLabel}
          </button>
        </li>
      </ul>
    )
  )
}

export default ReactPaginator
