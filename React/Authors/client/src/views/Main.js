import axios from "axios";
import { AuthorList } from "../components/AuthorList";
const { useState, useEffect } = require("react");
const { Link } = require("react-router-dom");


export const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return (
        <div>
            <Link to="/authors/new">
                <span>Add an author</span>
            </Link>
            <hr/>
            {loaded && <AuthorList authors = {authors} removeFromDom = {removeFromDom}/>}
        </div>
    )
}