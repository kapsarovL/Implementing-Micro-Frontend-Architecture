import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
          <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-red-600">Something went wrong</h2>
            <p className="mb-4 text-gray-600">
              The micro-frontend failed to load. This could be because:
            </p>
            <ul className="mb-4 text-gray-600 list-disc list-inside">
              <li>The service is not running</li>
              <li>There was a network error</li>
              <li>The module failed to initialize</li>
            </ul>
            <p className="text-sm text-gray-500">
              Error: {this.state.error?.message}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
