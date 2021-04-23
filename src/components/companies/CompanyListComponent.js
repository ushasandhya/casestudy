import React from 'react';
import Company from './CompanyDetailsComponent';

const CompanyListComponent=props=>{
    
    
    return(
        <div className="container mb-5">
            <h1>Companies List</h1><br/>
            <div className="row">
                { props.companies && props.companies.map( company=>{
                    return <div className="col-sm-4 mb-5"><Company isLoggedIn={props.isLoggedIn} addToWatch={props.add} key={company.id} company={company}/></div>
                    })
                }
            </div>
        </div>
    )
}
export default CompanyListComponent;