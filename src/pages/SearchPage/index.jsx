import SearchForm from '../../components/SearchForm'
import SearchResults from '../../components/SearchResults'
import { useState } from 'react'

export default function SearchPage() {

    const [keyword, setKeyword] = useState('')
    const [page, setPage] = useState(1)

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const handleNextPage = () => {
        setPage(parseInt(page) + 1)
    }
    const handlePrevPage = () => {
        setPage(parseInt(page) - 1)
    }
    const handleResetPage = () => {
        setPage(1)
    }

    return (
        <>
            <SearchForm handleChange={handleChange} handleSubmit={handleSubmit}></SearchForm>
            <SearchResults page={page} keyword={keyword} handleResetPage={handleResetPage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} ></SearchResults>
        </>
    )
}