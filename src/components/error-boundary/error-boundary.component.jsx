import React from 'react';


class ErrorBoundary extends React.Component {

    constructor() {
        super();

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log(info);
    }

    render() {
        return(
            this.state.hasError ? <div>Some thing went wrong</div> : this.props.children
        )
    }
}

export default ErrorBoundary;