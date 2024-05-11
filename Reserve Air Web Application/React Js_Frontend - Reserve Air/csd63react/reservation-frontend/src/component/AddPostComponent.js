import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';


class AddPostComponent extends Component{

        // state = {

        //     author : "",
        //     description : ""

        // }
        onToken = (token, addresses) => {
            // TODO: Send the token information and any other
            // relevant information to your payment process
            // server, wait for the response, and update the UI
            // accordingly. How this is done is up to you. Using
            // XHR, fetch, or a GraphQL mutation is typical.
          };

    render(){

        return(

        //     <StripeCheckout
        //     stripeKey="pk_test_51JJN1ZEJkk39CWLrSvighZ08kyWgzt4NiiqvWk1mvZgrPG89VdgQpLTyyAVh7BrtKYYF5V4nq3Ybt2txLdDIpQiN00PKifQsLA"
        //     // pk_test_51JJN1ZEJkk39CWLrSvighZ08kyWgzt4NiiqvWk1mvZgrPG89VdgQpLTyyAVh7BrtKYYF5V4nq3Ybt2txLdDIpQiN00PKifQsLA

        //     token={this.onToken}
        //   />
        <div className = "pymntgt">
                
        <StripeCheckout
                amount="12000"
                billingAddress
                description="Pay Your Air Ticket Fee Here !"
                image="css/Trophical Code_New_Test/img/countries/20.jpg"
                locale="auto"
                name="Reserve Air"
                stripeKey="pk_test_51JJN1ZEJkk39CWLrSvighZ08kyWgzt4NiiqvWk1mvZgrPG89VdgQpLTyyAVh7BrtKYYF5V4nq3Ybt2txLdDIpQiN00PKifQsLA"
                token={this.onToken}
                zipCode
                
                label="Pay with Your Card 💳"
                
            />
        </div>
                    
            // <div className="container">
            //     <div className="row">

            //             <div className="col-sm-8 offset-sm-2">

            //                         <br/>
            //                         <br/>
            //                         <br/>
                
            //                     <form>
            //                         <div className="form-group">
            //                             <label htmlfor="post-body"><h4>Please create your post Here !</h4></label>
            //                             <input type="text" className="form-control" id="post-body"/>
            //                         </div>                      
            //                         <button type="submit" className="btn btn-primary">Publish</button>
            //                     </form>
            //             </div>





            //     </div>
            // </div>

        );
        }

}
export default AddPostComponent;