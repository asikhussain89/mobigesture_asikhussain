import React from "react"

import SearchBox from "./SearchBox"
import CountryList from "./CountryList"
import AddCountry from "./AddCountry"
import More from "./More"

function ListContainer ( props ) {

    return (
        <>
            <div className = "country-list-container" id = "id-country-list-container" >
                <SearchBox filterCountriesFunc = {props.filterCountriesFunc} />

                { props.countryLists.countries.length > 0 ? <CountryList countryLists = {props.countryLists} /> : <AddCountry addNewCountryFunc = {props.addNewCountryFunc} /> }
                
            </div>

            { props.countryLists.countries.length > 5 ? <More moreCountryLength = {props.countryLists.countries.length - 5} /> : null }
        </>
    )
}

export default ListContainer;
export { ListContainer }