import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [heading, setHeading] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [adding, setAdding] = useState(false);
    const navigate = useNavigate();
    const handleSend = () => {  
        const blog = { title:heading, body, author };
        setAdding(true);
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
            .then(() => {

                console.log("Added");
                setAdding(false);
                navigate("/");
            }) 
    };

    return (
        <div className="create">
            <h2>Create new Blog</h2>
            <label>heading</label>
            <input 
                type="text"
                required
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
            />
            <label>body</label>
            <input 
                type="text"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <label>author</label>
            <input 
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            {!adding && <button onClick={handleSend}>Post Blog</button>}
            {adding && <button onClick={handleSend} disabled>adding blog</button>}

        </div>
    );
};

export default Create;