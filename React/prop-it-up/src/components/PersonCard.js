import React from "react";

export class PersonCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            FirstName: this.props.FirstName,
            LastName: this.props.LastName,
            Age: this.props.AgeStart,
            HairColor: this.props.HairColor
        }
    }

    render() {
        return (
            <div>
                <h1>
                    {this.props.LastName}, {this.props.FirstName}
                </h1>
                <p>
                    Age: {this.state.Age}
                </p>
                <p>
                    Hair Color: {this.props.HairColor}
                </p>
                <button onClick={() => {
                    this.setState({
                        Age: this.state.Age + 1
                    })
                }}>
                    {this.props.FirstName} {this.props.LastName} birthday
                </button>
            </div>
        );
    }
}