import React from "react";
import Trade from "./Trade";
const DataDate = ( { resultsCount , dateInput } ) => {
    return (
        <div className='date'>
            <input type="date" id="start" name="trip-start" min="2020-02-19" max="2021-12-08" onChange={dateInput}/><br/>
            <Trade resultsCount={resultsCount}/>
        </div>
        
    )
    
}
export default DataDate