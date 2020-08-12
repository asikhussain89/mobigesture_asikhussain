import React from "react"

import ListContainer from "./ListContainer"

import axios from "axios"

import "./App.css"


const openCountryListSearchContainer = () => {

    document.getElementById("id-country-list-container").style.display = "block";
    document.getElementById("id-more-country-text-container").style.display = "block";
}

let countryListJSON = {};

function App () {

    const [ countryLists, updateCountyLists ] = React.useState({});
    const [ countryAdded, updateCountryAdded ]  = React.useState(false);

    React.useEffect ( () => {
        
        if ( typeof countryLists.countries == "undefined" || countryAdded ) {
            
            axios.get( "http://13.57.235.126:5000/countries" )
                .then( function ( response ) {
                    countryListJSON = response.data;
                    updateCountyLists( countryListJSON );
                    updateCountryAdded( false );
                })
                .catch( function ( error ) {
                    console.log ( error );
                });
        }
    });

    const filterCountries = () => {

        const val = document.getElementById("id-search-box").value.toLowerCase();
        console.log(countryListJSON)
        const filteredCountryArr = countryListJSON.countries.filter( function ( value ) {
            
            let country = value.toLowerCase();
            if ( val == country.slice(0, val.length) ) { return true; }
        });
    
        updateCountyLists({"countries": filteredCountryArr});
    }

    const addNewCountry = () => {

        const countryName = document.getElementById("id-search-box").value;

        document.getElementById("id-search-box").value = "";

        axios.get( "http://13.57.235.126:5000/addcountry?name=" + countryName )
            .then( function ( response ) {
                if ( response.data.status && response.data.status == "Success" )
                    updateCountryAdded( true );
            })
            .catch( function ( error ) {
                console.log ( error );
            });
    }

    return (
        ( typeof countryLists.countries != "undefined" ) ?
            <>
                <div id = "id-main-input-box-container" onClick = {openCountryListSearchContainer}>
                    <div className = "main-input-box" >
                        <span>Select a location</span>
                    </div>
                    <div className = "down-arrow-container"></div>
                </div>

                <ListContainer countryLists = {countryLists} filterCountriesFunc = {filterCountries} addNewCountryFunc = {addNewCountry} />
            </>
        : null
    )
}

export default App;
export { App }