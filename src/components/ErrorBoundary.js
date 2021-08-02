import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hashError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }


    render() {
        if(this.state.hashError){
            return <h1>Oooops. That is not a good </h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary;