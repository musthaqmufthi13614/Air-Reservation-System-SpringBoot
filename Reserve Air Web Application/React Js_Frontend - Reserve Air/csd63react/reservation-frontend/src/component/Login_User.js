import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


class Login_User extends Component{


  








    render() {

        const responseFacebook = (response) => {
          console.log(response);
        }
    
        const responseGoogle = (response) => {
          console.log(response);
        }
    
            return (
              <div className="container">
                  <div className = " row">


{/* /////// */}
                  <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                  <h5>Register to Reserve Air</h5>
   <br/>
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
        </div>
{/* ///////////////// */}

{/* /////////////////// */}
<div className="card col-12 col-lg-4 login-card mt-2 hv-center">
   <h5>Login to Reserve Air</h5>
   <br/>
<div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       
                />
      </div>


      <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        
                    />
      </div>
      <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Login
                </button>
            

</div>

{/* /////////////////// */}

                        {/* /////////////////////////////// */}
                        <div className="Appfbgg">
                        <br/>
                                <h7>OR</h7>
                          <h5>Login with Google and Facebook </h5>
                  
                                <FacebookLogin
                                  appId="513084333297580" 
                                  //APP ID 
                                  fields="name,email,picture"
                                  callback={responseFacebook}
                                />
                                <br/>
                                <br/>
                          
                          
                                <GoogleLogin
                                  clientId="522494238783-2em8g9g9p4jbrpf942fevp2g093tlfks.apps.googleusercontent.com"
                                   //CLIENT ID 
                                  buttonText="LOGIN WITH GOOGLE"
                                  onSuccess={responseGoogle}
                                  onFailure={responseGoogle}
                                /> 
                        </div>
                        {/* //////////////////////// */}
                        
                  </div>
              </div>    
                     
            );
      }


}

export default Login_User;