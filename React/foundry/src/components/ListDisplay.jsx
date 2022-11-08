import React, { useState, useEffect } from 'react';

export const ListDisplay = (props) => {
    return (
        <div>
            <ul>
                {
                    props.users.map((user) => {
                        return (
                            <li key={user.id}>{user.lastname}, {user.firstname} {user.age}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}