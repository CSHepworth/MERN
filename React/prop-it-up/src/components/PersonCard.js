import React from "react";

export class PersonCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            FirstName: this.props.FirstName,
            LastName: this.props.LastName,
            Age: this.props.Age,
            HairColor: this.props.HairColor
        }
    }

    render() {
        return (
            <div>
                <h1>
                    {this.props.p1LastName}, {this.props.p1FirstName}
                </h1>
                <p>
                    Age: {this.props.p1Age}
                </p>
                <p>
                    Hair Color: {this.props.p1HairColor}
                </p>
            </div>
        );
    }
}