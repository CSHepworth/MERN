import React, {useState} from "react";

export const BoxGenerator = (props) => {
    const [color, setColor] = useState("");

    const handleColor = (e) => {
        e.preventDefault();
        setColor(e.target.value);
    }

    return (
        <form onSubmit={handleColor}>
            <div>
                <label>Color</label>
                <input type="text" onChange={(e) => setColor(e.target.value)}/>
                <input type="submit" value="Add"/>
            </div>
        </form>
    )
}
