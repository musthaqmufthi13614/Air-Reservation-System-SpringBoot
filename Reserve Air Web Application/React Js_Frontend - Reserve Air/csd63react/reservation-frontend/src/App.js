
import About from './component/AboutComponent';
import AddPostComponent from './component/AddPostComponent';
import NavBar from './component/NavBarComponent';
import PostComponentGen from './component/PostComponentGen';
import Login_User from './component/Login_User';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

// import AddPostComponent from './component/AddPostComponent';

// import PostComponent from './component/PostComponent';



/** Types of Components **/


//Hooks- functions
//class based
//JSX



//this is the Main component, component always return JSX outputs
function App() {

  // var num1 =50;


    return (
         <div className="App">
         
         
          {/* <h1>Welcome to the reactjs</h1>
          <h1>Answer of square Number :- {num1*num1}</h1>
          <h1>Answer of sqr.root :- {Math.sqrt(num1)}</h1> */}

          {/* Testing Purpose Only..! */}

          <NavBar />  
          {/* from NavBar function in NavBarComponent.js */}

                {/* <PostComponent /> */}
                  {/* from PostComponent class in PostComponent.js */}



  
                    {/* <PostComponentGen /> */}
                    {/* from PostComponentGen class in PostComponentGen.js */}

                    {/* <About/> */}
                      {/* from About function in AboutComponent.js */}

                    {/* <AddPost/> */}
                    {/* from AddPost function in AddPostComponent.js */}

        <BrowserRouter>
        <Switch>

         			 <Route path="/" exact>
           			 	<PostComponentGen />
                   		 {/* from PostComponentGen class in PostComponentGen.js */}
        			  </Route>

          			<Route path="/about" exact>
          				   <About/>
                      		{/* from About function in AboutComponent.js */}
         			 </Route>

          			<Route path="/add-post" exact>
           				     <AddPostComponent/>
                   		 {/* from AddPostComponent class in AddPostComponent.js */}
         			 </Route>

                <Route path="/login1" exact>
                   <Login_User/>
                  		 
                </Route>

        </Switch> 
      </BrowserRouter>





    </div>
     
  );
}
//publishing the component//
export default App;
