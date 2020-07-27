    import React , {useState , useContext } from 'react'; 
    import classnames from "classnames";
    import Modal from './Modal'
    import FormTitle from '../layout/FormTitle';
    import { AuthContext } from '../../contexts/AuthContext';
    import { withRouter} from "react-router-dom";




     
  const RegisterModal = (props) => {
    const { error , registerUser} = useContext(AuthContext);

    const [firstName , setFirstName] = useState("")
    const  [lastName , setLastName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [password2 , setPassword2] = useState("")

 

    const onSubmit = e => {
        e.preventDefault();
    const newUser = {
          firstName,
          lastName,
          email,
          password,
          password2
        };
    console.log("newUser" , newUser);
    console.log("props.history",props.history)
    // registerUser function will fired in actions/authAction.js
    registerUser(newUser,props.history); 
      };
      return ( 
          <Modal
                onClick={() => {
                  props.history.push(props.match.url);
                }}>
                
               {/* FORM REGISTER */}
               <FormTitle>  Connect Now </FormTitle>
<div className="content">
<form noValidate onSubmit={onSubmit}>

  
       <div className="div-c inline-2">
        <div className="divided-column">
           <input
             onChange={(e)=>setFirstName(e.target.value)}
             value={firstName}
             error={error.firstName}
             id="firstName"
             type="text"
             placeholder=" firstName"
             className={classnames("", {
               invalid: error.firstName
             })}
           />
           <span className="red-text">{error.firstName}</span>

        </div>
        <div className="divided-column">
           {/* <input type="text" placeholder=" Name"/> */}
           <input
             onChange={(e)=>setLastName(e.target.value)}
             value={lastName}
             error={error.lastName}
             id="lastName"
             type="text"
             placeholder=" lastName"
             className={classnames("", {
               invalid: error.lastName
             })}
           />
           <span className="red-text">{error.lastName}</span>

        </div>
       
    </div>

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
               invalid: error.email
             })}
           />
           <span className="red-text">{error.email}</span>
        </div>
        <div className="divided-column">

            <input
             onChange={(e)=>setPassword(e.target.value)}
             value={password}
             error={error.password}
             id="password"
             type="password"
             placeholder="Password"
             className={classnames("", {
               invalid: error.password
             })}
           />
           {/* <label htmlFor="password">Password</label> */}
           <span className="red-text">{error.password}</span>
        </div>
    </div>

    <div className="div-c">
        {/* <div className="divided-column">
            <input type="text" placeholder="E-mail Adress"/>
        </div> */}
        <div className="divided-column">
            {/* <input type="text" placeholder="Password2"/> */}

            <input
            onChange={(e)=>setPassword2(e.target.value)}
             value={password2}
             error={error.password2}
             id="password2"
             type="password"
             placeholder="Password2"
             className={classnames("", {
               invalid: error.password2
             })}
           />
           {/* <label htmlFor="password2">Confirm Password</label> */}
           <span className="red-text">{error.password2}</span>
        </div>
    </div>

   
    
    <div className="button-sq fullwidth-sq">
    <button type="submit"
   className="btn btn-large waves-effect waves-light hoverable blue accent-3"
           >
             Sign up
           </button>
        </div>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>  
</form>
</div>
</Modal>
       );
  }
   
  export default withRouter(RegisterModal);   
     
     
     
     