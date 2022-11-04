import React, {useState} from "react";

export const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <pre>{props.message}</pre>
        </>
    );
};

