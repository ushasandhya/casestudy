import React from 'react';
import {useLocation} from 'react-router-dom'
import CompanyDetailsComponent from '../companies/CompanyDetailsComponent';

const WatchListComponent = props => {
    let path=useLocation().pathname
    let watchList = null;
    if (props.companies.length != 0) {
        watchList = props.companies.map((company) => {
            return <div className="col-sm-4">
                        <CompanyDetailsComponent removeCompany={() => props.remove(company.id)} company={company}  path={path} isLoggedIn={props.isLoggedIn}/>
                    </div>
                
        });
    }
    return (
        <div className="container">
             <h1>Companies List</h1><br/>
             {props.companies.length==0?<h3>No company stock prices added to watch list</h3>:''}
             <div className="row">
                 {watchList}
             </div>
           
        </div>
    )
}
export default WatchListComponent;