import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthorList = (props) => {
    const { removeFromDom } = props;
    const navigate = useNavigate();

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {props.authors.map((author, i) =>
                    <tr key={i}>
                        <td>{author.name}</td>
                        <td>
                            <button onClick={(e) => {navigate(`/authors/${author._id}/edit`)}}>
                                <span>Edit</span>
                            </button>
                            <button onClick={(e) => {deleteAuthor(author._id)}}>
                                <span>Delete</span>
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}