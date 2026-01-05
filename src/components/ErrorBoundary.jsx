import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
                    <h1>Something went wrong.</h1>
                    <p>Please take a screenshot of this error and send it to the developer.</p>
                    <details style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
                        <summary>Error Details</summary>
                        <br />
                        <strong>Error:</strong> {this.state.error && this.state.error.toString()}
                        <br /><br />
                        <strong>Stack Trace:</strong> {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
