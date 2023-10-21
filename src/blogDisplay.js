import { Link } from "react-router-dom";



const BlogCom = (props) =>{
    const blogs =  props.blogs;
    const title = props.title;
    return (
        <div>
            <h1>
                {title}
            </h1>
            {blogs.map((blog) => (
                <div className="blog-preview " key = {blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                        <h1> {blog.title}</h1>
                        <h2> {blog.author} </h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogCom;