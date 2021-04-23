import React from 'react';

const Perf =props=>{
    let companies = props.companies;

    let rows = companies.map((company)=>{
        return(
            <tr>
                <td>
                    <b>{company.date}</b>
                </td>
                <td>
                    {company.name}
                </td>
                <td>
                    ${company.price}
                </td>
            </tr>
        )
    });
        return(
          <div>
              <table class="table table-striped"> 
                  <thead>
                      <tr>
                          <td><h2>Date</h2></td>
                          <td><h2>Company</h2></td>
                          <td><h2>Stock Price</h2></td>
                      </tr>
                  </thead>
                  <tbody>
                   {rows}
                  </tbody>
              </table>
          </div>
           
        )
    
    
}
export default Perf;