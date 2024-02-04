import React, { Component } from 'react'
export default class Index extends Component {
    constructor(props) {
        super()
        this.state = {
            error: null,
            errorInfo: null
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }
    render() {
        return (
            <>
                {
                    this.state.error ? <h1>Something went wrong</h1> : this.props.children
                }
            </>
        )
    }
}
