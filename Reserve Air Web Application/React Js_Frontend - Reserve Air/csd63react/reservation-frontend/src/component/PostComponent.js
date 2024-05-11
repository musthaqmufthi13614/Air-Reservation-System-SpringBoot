import React, { Component } from 'react';

class PostComponent extends Component{

        //fake API 
        data = [
            {id: 1, body: "The Perks of Being a Wallflower", author:"Emma Watson" },
            {id: 2, body: "The Devil's Advocate", author:"Keanu Reeves" },
            {id: 3, body: "Mission Impossible", author:"Tom Cruise" },
        ];


        state = {
                error : null,
                isLoaded : false,
                items : [] 
        }

        componentDidMount(){
            // API CALL
            if(this.data.length ===0){
                this.setState({
                    isLoaded : true,
                    error : "No Data Available"
                });     
            } 
                else{
                    this.setState({
                        isLoaded : true,
                        items : this.data
                    });
                }
        }




    render(){

        const error = this.state.error;
        const isLoaded = this.state.isLoaded;
        const items = this.state.items;


        if(error){
            return(
                <h3>Error : Couldn't load the items</h3>
            );
        }
        else if(!isLoaded){
                return(
                    <h3>Loading...pls...</h3>
                );
        }
        // }else{
        //     return(
        //         <div>
        //             {items.map(item =>
        //                 <div>
        //                     {item.body} 
        //                     {item.author}
        //                 </div>
        //                 )}
        //         </div>
        //     );
        // }

        else{
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">


                {items.map(item =>

                        <div key = {item.id} className="card mt-3">

                                <div className="card-header">
                                    {/* <h6>N/A</h6> */}
                                    <h4>{item.author}</h4>
                                </div>
                                <div className="card-body">
                                    {/* <h5>N/A</h5> */}
                                    <h5>{item.body}</h5>                                
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary">Like</button>
                                </div>
                        </div>

                    )}


                    </div>
                </div>
            </div>
            
        );}
    }
}

export default PostComponent;