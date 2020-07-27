import React, { useContext , useState} from 'react'
import classnames from "classnames";
import { withRouter} from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';


 const SignInForm  = ()=> {

  const { error , signInUser} = useContext(AuthContext);
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")


    const onSubmit = e => {
        e.preventDefault();
      
    const userData = {
          email,
          password
        };
    signInUser(userData);
      }
  
        return (
             <div className="content">
          <form noValidate onSubmit={onSubmit}>
          <div className="div-c">
           <div className="divided-column">
               {/* <input type="text" placeholder="E-mail Adress"/> */}

               <input
               onChange={(e)=>setEmail(e.target.value)}
                 value={email}
                 error={error.email}
                 id="email"
                 type="email"
                 placeholder="E-mail Adress"
                 className={classnames("", {
                   invalid: error.email || error.emailnotfound
                 })}
               />
               {/* <label htmlFor="email">Email</label> */}
               <span className="red-text">
                 {error.email}
                 {error.emailnotfound}
               </span>
           </div>
           <div className="divided-column">
               {/* <input type="text" placeholder="Password"/> */}

               <input
               onChange={(e)=>setPassword(e.target.value)}
                 value={password}
                 error={error.password}
                 id="password"
                 type="password"
                 placeholder="Password"
                 className={classnames("", {
                   invalid: error.password || error.passwordincorrect
                 })}
               />
               {/* <label htmlFor="password">Password</label> */}
               <span className="red-text">
                 {error.password}
                 {error.passwordincorrect}
               </span>
           </div>
       </div>



          <div className="button-sq fullwidth-sq">
          <button type="submit"
         className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                 >
                   Sign In
                 </button>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
          </form>
          </div>

        )
    }



  export default 
  (withRouter(SignInForm));
