import { useNavigate, useParams } from "react-router-dom";
import useGet from "./useDatabase";
import { useState  } from "react";
function FullBlogView() {
    const { id } = useParams();
    const { data: blog, showLoading:loading, errorMessage } = useGet("http://localhost:8000/blogs/" + id);
    const [deleting, setDeleting] = useState(false);
    const navigate = useNavigate();
    const deleteBlog = () => {
        setDeleting(true);
        fetch("http://localhost:8000/blogs/" + id, {method: "DELETE"}).then((res) => {
            if (res.ok){
                setDeleting(false);
                navigate("/");
            }
        })
    }
    return (
        <div className="fullBlogView">
            {loading && <div>Loading...</div>}
            {errorMessage && <div>{errorMessage}</div>}
            {blog && (
                <form>
                    <h1>{blog.title}</h1>
                    <h2>{blog.body}</h2>
                    <h3>{blog.author}</h3>
                    {!deleting && <button onClick={deleteBlog}>delet blog</button>}
                    {deleting && <button  disabled>deleting </button>}

                </form>
            )}
        </div>
    );
}

export default FullBlogView;