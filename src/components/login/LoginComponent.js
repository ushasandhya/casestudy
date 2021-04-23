import React ,{useState} from 'react'
const LoginComponent =(props) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isEmailValid,setIsEmailValid]=useState(true)
    const [isPasswordValid,setIsPasswordValid]=useState(true)
   
    const emailInputChangeHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordInputChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const formSubmissionHandler = event => {
        event.preventDefault();
        if (email.trim() === '') {
            setIsEmailValid(false)
            return;
        }
        if (password.trim() === '') {
            setIsPasswordValid(false)
            return;
        }

        props.submit(email,password);
    }
  
        return (
           <div className="container">
               <div className="row">
                   <div className="col-sm-3"></div>
                   <div className="col-sm-6">
                   <form onSubmit={formSubmissionHandler}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={emailInputChangeHandler}
                                id="email"
                            ></input>
                            {!isEmailValid ? <p className="text-danger">Please enter email</p> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={passwordInputChangeHandler}
                                id="password"></input>
                            {!isPasswordValid ? <p className="text-danger">Please enter password</p> : null}
                        </div>
                        <button type="submit" id="submit" className="btn btn-primary">Submit</button>
                    </form>
                   </div>
                   <div className="col-sm-3"></div>
               </div>
           </div>
        )
    
}
export default LoginComponent;