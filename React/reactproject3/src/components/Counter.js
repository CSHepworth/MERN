import React from 'react'

export class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.start || 0,
            clickDates: []
        }
    }

    render() {
        return <button onClick={() => {
            this.setState({
                count: this.state.count + (this.props.step || 1)
            })
        }}
        >Count {this.state.count} - {this.props.title}
        </button>
    }
}

