import './SearchForm.css'

export default function SearchForm({ handleSubmit, handleChange }) {

    return (
        <div className="searchForm">
            <form action="" className="searchForm-parent" onSubmit={handleSubmit}>
                <input type="text" className="searchInput" placeholder='Search some character...' onChange={handleChange} />
                <button className="searchButton">Search</button>
            </form>
        </div>
    )
}