import React from "react"

function AddCountry ( props ) {

    const searchText = document.getElementById("id-search-box").value;

    return (
        <div className = "add-country-container" >
            <div className = "not-found-text-container" >
                <span>"{searchText}" not found</span>
            </div>
            <button className = "add-select-btn" onClick = {props.addNewCountryFunc} >Add & Select</button>
        </div>
    )
}

export default AddCountry;
export { AddCountry }