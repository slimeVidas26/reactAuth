import React , {createContext , useReducer , useContext} from 'react'
import setAuthToken from "../utils/setAuthToken";
import {withRouter} from 'react-router-dom'
import axios from 'axios'

//import reducers
import authReducer , {initialState} from '../reducers/authReducer'
import errorReducer , {initialStateError} from '../reducers/errorReducer'

export const AuthContext = createContext();

const GOOGLE = "google-auth"
const TWITTER = "twitter-auth"
const FACEBOOK = "facebook-auth"
const SPOTIFY = "spotify-auth"
const INSTAGRAM = "instagram-auth"
const GITHUB = "github-auth"
const AMAZON = "amazon-auth"

const AuthContextProvider  = (props) => {

 
    
    const [User , dispatchUser] = useReducer(authReducer , initialState);
    const [error , dispatchError ] = useReducer(errorReducer , initialStateError)
    const [networkError , dispatchNetworkError ] = useReducer(errorReducer , initialStateError)

    const signInUser = (userData ) => {
      axios.post("/auth/login", userData)
            .then(res => {
              // Save to localStorage
        // Set token to localStorage
              const { token } = res.data;
              localStorage.setItem("jwtToken", token);
              // Set token to Auth header
              setAuthToken(token);
              // Decode token to get user data
              window.location.href = "./";
            })
          .catch(err => {
          dispatchError({type: "GET_ERRORS" ,payload :err.response.data})
        })
          };
  
  
    const registerUser = (userData, history) => {
      axios
        .post("/auth/register", userData)
        .then(res => history.push("/?signin=true")) // re-direct to login on successful register
        .catch(err => {
          dispatchError({type: "GET_ERRORS" , payload :err.response.data})
        }
     
        );
     };
    
   const socialLoginUser = () =>{
    
          fetch("/auth/login/success", {
           method: "GET",
           credentials: "include",
           headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
             "Access-Control-Allow-Credentials": true
           }
         })
           .then(response => {
             if (response.status === 200) return response.json();
             throw new Error("failed to authenticate user");
           })
           .then(responseJson => {           
             const socialDecoded = responseJson.user;
             console.log("socialDecoded fr" , socialDecoded)
             dispatchUser({
              type : "SET_CURRENT_USER" ,
              payload : socialDecoded 
            })
           
              console.log("decoded from authContext" , User)
              const {handle} = props.match.params
              console.log("handle" , handle)
            switch (handle) {
              
              case GOOGLE:
                case AMAZON:
                  case TWITTER:
                    case FACEBOOK:
                      case SPOTIFY:
                        case INSTAGRAM:
                          case GITHUB:
                return (
                  User
                  );
               default:
                 return "toto";
            }})
           .catch(err => {
            dispatchNetworkError({type: "GET_NETWORK_ERRORS"})
          });
       }

    
   const socialLogoutUser = () =>{
    dispatchUser({
      type : "SET_CURRENT_USER" ,
      payload : {} 
    })
    window.open("http://localhost:5000/auth/logout", "_self");
    props.history.push("./");
  }

     const logoutUser = () => {
      console.log("user is logged out")
      console.log("props.match.params" , props.match.params)
      // Remove token from local storage
      localStorage.removeItem("jwtToken");
      // Remove auth header for future requests
      setAuthToken(false);
      // Set current user to empty object {} which will set isAuthenticated to false
      dispatchUser({
        type : "SET_CURRENT_USER" ,
        payload : {} 
      })
      console.log("props.history",props.history)
       window.location.href = "./";
      //props.history.location("./");
      //props.history.push("/?signin=true")

    };

    

    return ( 
        <AuthContext.Provider value = {{logoutUser ,signInUser , registerUser ,  dispatchUser  ,socialLoginUser ,socialLogoutUser ,  dispatchError ,dispatchNetworkError ,   User , error , networkError }}>
         {props.children}
        </AuthContext.Provider>
     );

}
 
export default withRouter(AuthContextProvider) ;