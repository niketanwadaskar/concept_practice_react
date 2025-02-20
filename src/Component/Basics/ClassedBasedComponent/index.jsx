import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    method() {
        this.setState.apply(this, [{ num: this.state.num + 1 }])
    }

    render() {
        return (
            <div>
                <h1>Classed Based Component</h1>
                <button onClick={() => this.method()}>Click</button>
                <p>{this.state.num}</p>
            </div>
        )
    }
}
