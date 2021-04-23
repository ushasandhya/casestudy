import React, {useState} from 'react';
import Perf from './Perftable'

const PerformanceComponent = props => {
        const [comp1,setComp1] =useState()
        const [comp2,setComp2]=useState()
        const [date1,setDate1]=useState()
        const [date2,setDate2]=useState()
        const [isPerfomed, setIsPerfomed] = useState(0);
        const [comps, setComps]= useState(null);

        const compOneHandler=event=>{
            setComp1(event.target.value)
        }
        const compTwoHandler=event=>{
            setComp2(event.target.value)
        }
        const dateOneHandler=event=>{
            setDate1(event.target.value)
        }
        const dateTwoHandler=event=>{
            setDate2(event.target.value)
        }


        let companies = props.companies;
        let uniqueComp=[]
        companies.map((company) => {
            
        if(!((uniqueComp.filter(d=>d['name']===company.name)).length>0))  
        {
            uniqueComp.push(company)
        }
                
        });

        let optionItems = uniqueComp.map(c=>{
            return  <option key={c.id}>{c.name}</option>
        })

      
        let uniqueDate=[]
        companies.map((company)=>{

               if(!((uniqueDate.filter(d=>d['date']===company.date)).length>0))  
                {
                    uniqueDate.push(company)
                }
        });
        let dates=uniqueDate.map(c=>{
            return  <option key={c.id}>{c.date}</option>
        })
       
        
        const perHandler=()=>{
            let c=[];
            companies.map((company) =>{
                if(company.name === comp1 || company.name === comp2){
                    if(company.date <= date2){
                        c.push(company);
                    }
                }
            })
            setIsPerfomed(isPerfomed + 1);
            setComps(c);
            console.log(c)
        }

       
    return(
        <div className="container">
            <h3>Compare Potential Companies</h3>
            <h5 className="text-muted">Make smart investment decision</h5>
            <table class="table">
                <tr>
                    <td>Select company 1 
                        <br/>
                        <select id="selectedcompany1" name="selectedcompany1" onChange={compOneHandler} value={comp1}>
                            {optionItems}
                        </select>
                    </td> 
                    <td>Select company 2 
                        <br/> 
                        <select id="selectedcompany2" name="selectedcompany2" onChange={compTwoHandler} value={comp2}>
                            {optionItems}
                        </select>
                    </td> 
                </tr>
                <br></br>
                <tr>
                    <td>From Date  
                        <br></br> 
                        <select id="date1" name="date1" onChange={dateOneHandler} value={date1}>
                            {dates}
                        </select>
                    </td> 
                    <td>To Date
                        <br/>
                        <select id="date2" name="date2" onChange={dateTwoHandler} value={date2}>
                            {dates}
                        </select>
                    </td> 
                </tr>
                <tr><td><button  class="btn btn-md bg-primary" onClick={() => perHandler()} style={{color:"white"}}>Fetch Details</button></td><td></td></tr>
            </table>
            
            <div>{isPerfomed > 0 ? <Perf companies={comps}/> : ''}</div>
        </div>
        
    )
}
export default PerformanceComponent;