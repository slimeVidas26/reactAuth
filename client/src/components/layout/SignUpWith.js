import React , {useContext} from 'react'
import { Link } from "react-router-dom";
import { SignUpContext } from '../../contexts/SignUpContext';


const SignUpWith = ()=> { 

  const {network} = useContext(SignUpContext);

  const getSocialUrl = (socialNetwork)=>{
    // Authenticate using via passport api in the backend
    window.open(`http://localhost:5000/auth/${socialNetwork}`, "_self");
     } 


      const socialNetwork = network.map((item , index)=>{
        //  WILL REDIRECT TO THE SignUpForm COMPONENT   
               return item.socialNetwork === "Email" ?
                   <Link to= {{ pathname:item.linkTo.pathName, search: item.linkTo.search }}
                      onClick={item.func}
                      
                      key = {index}
                       className={item.className}>
                     <i className={item.icon}></i>
                     <span>{item.Text}</span>
                 </Link>
              :
                   <div
                     onClick={()=>getSocialUrl(item.socialNetwork)}
                      key = {index}
                       className={item.className}>
                     <i className={item.icon}></i>
                     <span>{item.Text}</span>
                 </div>   
          })


    return(
         socialNetwork    
    )
}

export default SignUpWith


 
