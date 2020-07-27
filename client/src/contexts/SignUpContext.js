import React , {createContext , useState} from 'react'
export const SignUpContext = createContext();

const SignUpContextProvider = (props) => {



 
    const [network , setNetwork] =  useState([
        {   
          socialNetwork : "Email",
          linkTo : {
              pathName : "/register",
              search : "mail=true"
                 },
          className : "button-sq fullwidth-sq ",
          icon : "icon icon-email-2",
          Text : "Sign Up With Mail",
          func: null
      },
        {   
            socialNetwork : "twitter",
            className : "button-sq fullwidth-sq google-button",
            icon : "icon icon-logo-twitter-bird2",
            Text : "Sign Up With Twitter",
            //func : getSocialUrl(twitter)
        },
        {   
          socialNetwork : "google",
          className : "button-sq fullwidth-sq google-button",
          icon : "icon icon-logo-circle-google-plus-22",
          Text : "Sign Up With Google",
          //func : getSocialUrl(google)


      },
      {   
          socialNetwork : "facebook",
          className : "button-sq fullwidth-sq facebook-button",
          icon : "icon icon-logo-facebook2",
          Text : "Sign Up With Facebook",
          //func : getSocialUrl(facebook)


      },
      {   
        socialNetwork : "amazon",
        className : "button-sq fullwidth-sq amazon-button",
        icon : "icon icon-logo-amazon",
        Text : "Sign Up With Amazon",
        //func : getSocialUrl(amazon)


    },
    {   
      socialNetwork : "spotify",
      className : "button-sq fullwidth-sq amazon-button",
      icon : "icon icon-logo-amazon",
      Text : "Sign Up With Spotify",
      //func : getSocialUrl(spotify)


  },
  {   
    socialNetwork : "instagram",
    className : "button-sq fullwidth-sq amazon-button",
    icon : "icon icon-logo-amazon",
    Text : "Sign Up With Instagram",
    //func : getSocialUrl(instagram)


},
{   
  socialNetwork : "github",
  className : "button-sq fullwidth-sq amazon-button",
  icon : "icon icon-logo-amazon",
  Text : "Sign Up With Github",
  //func : getSocialUrl(github)


}
       ]);

     



    
    return ( 
        <SignUpContext.Provider value = {
            {network }}>
         {props.children}
        </SignUpContext.Provider>
     );
}
 
export default SignUpContextProvider;