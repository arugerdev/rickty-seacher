import { useState, useEffect } from 'react'
import getApiData from '../../services/getApiData'
import CharacterCard from '../CharacterCard'
import Loader from '../Loader'
import './SearchResults.css'

export default function SearchResults({ keyword, page, handlePrevPage, handleNextPage, handleResetPage }) {
    const [info, setInfo] = useState()
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    const [_keyword, setKeyword] = useState(keyword)
    const [_page, setPage] = useState(1)
    useEffect(() => {
        setLoading(true)
        getApiData(_keyword, _page).then((data) => {
            setInfo(data.info)
            setResults(data.results)
            setLoading(false)
        })
    }, [_keyword, _page]
    )

    if (keyword !== _keyword) {
        setKeyword(keyword)
        handleResetPage()
    }

    if (page !== _page) {
        setPage(page)
    }
    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    if (!loading && info != null && info.count > 0) {
        return (
            <div className='searchResults_page'>
                {(info != null) &&
                    <span>{info.count} results founded.</span>
                }

                <div className="pagesNav">
                    {(results != null) && (_page > 1) &&
                        <button onClick={handlePrevPage}>Prev. Page</button>
                    }
                    Page {_page}
                    {(info != null) && (_page < info.pages) &&
                        <button onClick={handleNextPage}>Next. Page</button>
                    }
                </div>
                <div className="searchResults">
                    {(results != null) &&
                        Object.values(results).map((item) => {
                            return (
                                <CharacterCard key={item.id} id={item.id}></CharacterCard>
                            )
                        })
                    }


                </div >
                <div className="pagesNav">
                    {(results != null) && (_page > 1) &&
                        <button onClick={handlePrevPage}>Prev. Page</button>
                    }
                    Page {_page}
                    {(info != null) && (_page < info.pages) &&
                        <button onClick={handleNextPage}>Next. Page</button>
                    }
                </div>
            </div>
        )
    }
}