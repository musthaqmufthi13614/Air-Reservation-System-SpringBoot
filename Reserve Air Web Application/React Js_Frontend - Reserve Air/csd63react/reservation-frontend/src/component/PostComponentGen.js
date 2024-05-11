import React, { Component } from 'react';
import axios from 'axios';


class PostComponentGen extends Component{

    state ={
            error : null,
            isLoaded : false,
            items : []
    }

    // prepare the data or processing to render --> data preperation stuffs etc.
    componentDidMount(){

 /**
         * We can call API with
         * 1. XmlHttpRequest (AJAX --> outdated*)
         * 2. Fetch API (modern, for now only latest browser version only supporting)
         * 3. Axios (suited any scenario)
         **/

        const  API_URL_Endpoint = "http://localhost:8080/api/v1/posts";
        // URL path of postman Endpoint from the backend.

        //promise().then().catch();
        axios.get(API_URL_Endpoint)

            .then(response => {
                this.setState({
                    isLoaded : true,
                    items : response.data
                })
            })

            .catch(error => {
                this.setState({
                    isLoaded : true,
                    error : error

                })
        });
    }

        // to render the output or proceed the output to the HTML Page
         //Render the output to HTML page with JSX
         render(){

                    // const error = this.state.error;
                    // const isLoaded = this.state.isLoaded;
                    // const items = this.state.items;

            const {error , isLoaded, items } = this.state;
    
            if(error){
                return(
                    <div className="alert alert-danger" role="alert">
                       Back-End API still not Available or ready..! 
                    </div>
                );
            } else if(!isLoaded){
                return(
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                );
            } else {
                return(
                    <div className="container">
                            <br/>
                     <h2 className = "admn-fltinf" ><b>Admin - Flight Info Operations</b></h2>

                        <div className="row">
                            <div className="col-sm-8 offset-sm-2">
                                
                                {items.map(item =>
                                
                                    <div key={item.id} className="card mt-3">

                                        <div id = "cardheader1" className="card-header">
                                                 <h4><b>{item.caption}</b></h4>
                                            
                                             <img src = {item.imgpath} /> 
                                             {/* <img src = {"css/Trophical Code_New_Test/img/countries/1.png"} alt = {"not found"}/>  */}


                                            {/* caption attribute in tbl_post in post_db --> mysql workbench */}
                                        </div>
                                        <div className="card-body">
                                                <b>Airline & Country :  {item.description}</b>
                                        </div>                                      
                                        <div className="card-body">
                                                <b>Arrival Time & Date :  {item.time}</b>  
                                        </div>
                                        <div className="card-body">
                                                <b> Flight Code :  {item.flight_code}</b>
                                        </div>
                                        
                                        
                                        <div id = "cardheader1" className="card-footer">
                                            <button className="btn btn-primary">View Flight Schedule</button>
                                            <button id ="btn1" className="btn btn-success">Update Flight Schedule</button>
                                            <button id ="btn2" className="btn btn-danger">Delete Flight Schedule</button>

                                            
                                        </div>
                                        
                                        
                                        
                                    </div>
    
                                )}
    
                            </div>
                            




                        </div>
                    </div>
                );
            }
           
       }
     
    }
    
    export default PostComponentGen;