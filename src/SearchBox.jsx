import React from "react"


function SearchBox ( props ) {

    return (
        <>
            <input type = "text" name = "searchbox" placeholder = "Search..." id = "id-search-box" className = "search-box" onChange = {props.filterCountriesFunc} />
        </>
    )
}

export default SearchBox;
export { SearchBox }