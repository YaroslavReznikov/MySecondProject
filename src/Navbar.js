import {Link} from "react-router-dom"


function Navbar(){
    return (
        <div className = "bar">
            <div className="welcome">
                <h1 style={{
                    color:"#f1356d"
                }}>
                    Our blog
                </h1>
            </div>
            <div className="links">
                <Link to="/">
                    home
                </Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius:'8px'
                }}>
                    new blog
                </Link>
            </div>
        </div>
    )
}
export default Navbar;