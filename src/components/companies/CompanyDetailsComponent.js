import React from 'react';

const CompanyDetailsComponent =props=>{
      
        return(
          
            <div className="card text-center">
                <h2 className="card-header">
                    {props.company.name}
                </h2>
                <div className="card-body">
                    {props.company.description}
                </div>
                <div className="card-footer">
                    <span>Today's Price: ${props.company.price}</span> &nbsp;
                     {props.isLoggedIn ? props.path=='/watchlist' ?
                        <button  onClick={props.removeCompany} type="button" className="btn btn-danger">Remove</button>:
                        <button onClick={ ()=> props.addToWatch(props.company.id)} type="button" className="btn btn-sm btn-primary">Watch</button>:''}
                </div>
               
            </div>
        )
    
    
}
export default CompanyDetailsComponent;