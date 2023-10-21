import BlogCom from "./blogDisplay";
import useGet from "./useDatabase";

function Home(){
    const {data:blogs, showLoading, errorMessage} = useGet("http://localhost:8000/blogs");
    return (
        <div className= "home">
            {errorMessage && <h1> {errorMessage}</h1>}
            {showLoading && <h1> Loading...</h1>}
            {blogs && <BlogCom blogs = {blogs} title = "all posts"/>}
        </div>
    );
}

export default Home;