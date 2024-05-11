
function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-color">
              <img src = {"css/Trophical Code_New_Test/img/countries/13.png"} alt = {"not found"}/>
            {/* <a className="navbar-brand" href="/"> <h4><b>CSD 63</b></h4></a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li id = "nav1" className="nav-item active">
                <a id ="navtext1" className="nav-link" href="/"> Home <span className="sr-only">(current)</span></a>
                </li>
                <li id = "nav1" className="nav-item active">
                <a id ="navtext1" className="nav-link" href="/"> Flights <span className="sr-only">(current)</span></a>
                </li>
                <li id = "nav1" className="nav-item active">
                <a id ="navtext1" className="nav-link" href="/"> Tickets <span className="sr-only">(current)</span></a>
                </li>
                <li id = "nav1" className="nav-item active">
                <a id ="navtext1" className="nav-link" href="login1"> Account  <span className="sr-only">(current)</span></a>
                </li>
                <li id = "nav1" className="nav-item active">
                <a id ="navtext1" className="nav-link" href="about"> About  <span className="sr-only">(current)</span></a>
                </li>
                <li  id = "nav1" className="nav-item active">
                <a id ="navtext1" className="nav-link" href="add-post"> Payments <span className="sr-only">(current)</span></a>
                </li>

            </ul>
            </div>
        </nav>
    );
}

export default NavBar;