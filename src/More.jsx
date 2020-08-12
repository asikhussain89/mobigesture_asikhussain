import React from "react"

function More ( props ) {

    return (
        <div id = "id-more-country-text-container" className = "more-country-text-container" >
            <span>{props.moreCountryLength} more...</span>
        </div>
    )
}

export default More
export { More }