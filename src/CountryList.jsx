import React from "react"

function CountryList ( props ) {

    const countryListArr = ( typeof props.countryLists.countries != "undefined" ) ? props.countryLists.countries : [];

    const countryListElement = countryListArr.map(element => {
        return <li key = {element} >{element}</li>;
    });

    return (
        <>
            <ul className = "country-list-ul" >{countryListElement}</ul>
        </>
    )
}

export default CountryList;
export { CountryList }