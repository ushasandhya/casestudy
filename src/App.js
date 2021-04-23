import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MenuComponent from './components/menu/MenuComponent';
import LoginComponent from './components/login/LoginComponent';
import CompanyList from './components/companies/CompanyListComponent.js';
import Performance from './components/performance/PerformanceComponent'
import WatchList from './components/watchlist/WatchListComponent';

const App =() => {
  let watch=[]
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [watchList,setWatchList]=useState(watch)

  let companies=[
    { id: 1, date:'01-01-2021' , name: 'CTS', description: 'This is CTS company', price: 500 },
    { id: 2, date:'01-02-2021' , name: 'CTS', description: 'This is CTS company', price: 430 },
    { id: 3, date:'01-03-2021' , name: 'CTS', description: 'This is CTS company', price: 470 },
    { id: 4, date:'01-01-2021' ,name: 'TCS', description: 'This is TCS company', price: 400 },
    { id: 5, date:'01-02-2021' ,name: 'TCS', description: 'This is TCS company', price: 480 },
    { id: 6, date:'01-03-2021' ,name: 'TCS', description: 'This is TCS company', price: 430 },
    { id: 7, date:'01-01-2021' ,name: 'Wipro', description: 'This is Wipro company', price: 400 },
    { id: 8, date:'01-02-2021' ,name: 'Wipro', description: 'This is Wipro company', price: 490 },
    { id: 9, date:'01-03-2021' ,name: 'Wipro', description: 'This is Wipro company', price: 350 },
  ]
 

  const addToWatchList = (id) => {
    const company = companies.find(company => company.id === id);
    watchList.push(company);
    setWatchList(watchList)
    console.log(watchList);
    alert('Successfully added to the watch list')
  }


  const removeCompanyHandler = (index) => {
      console.log(index)
      const newList = watchList.filter((item) => item.id !== index);
      setWatchList(newList)
      console.log(watchList)
      alert('Removed successfully from the watch list')
  }


  const logoutHandler = () => {
    setIsLoggedIn(false)
  }


  const loginHandler = (email, password) => {
    if (email === 'usha@gmail.com' && password === 'Sandhya@1234') {
      setIsLoggedIn(true)
    }
  }
  
  let routes
  if(isLoggedIn)
  {
    routes=( <Switch>
     <Route path="/company-list" exact>
           <CompanyList isLoggedIn={isLoggedIn} add={addToWatchList}  companies={companies}/>
     </Route>
     <Route path="/performance" exact>
           <Performance companies={companies}/>
     </Route>
     <Route path="/watchlist" exact>
           <WatchList isLoggedIn={isLoggedIn} companies={watchList} remove={removeCompanyHandler}/>
     </Route>
    <Redirect to="/watchlist" />
    
    </Switch>)
  }
  else{
    routes=( <Switch>
      <Route path="/login" exact>
             <LoginComponent submit={loginHandler}/>
       </Route>
       <Route path="/company-list" exact>
             <CompanyList companies={companies} />
       </Route>
      
      <Redirect to="/login" />
      
      </Switch>)
  }
  return(
    <Router>
      <MenuComponent logout={logoutHandler} isLoggedIn={isLoggedIn}/>
       {routes}
    </Router>

  )
 
  
}
export default App;