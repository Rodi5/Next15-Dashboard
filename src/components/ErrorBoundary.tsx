"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"

interface Props {
  children?: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-4 rounded-lg bg-red-50 text-red-600">
            <h2 className="text-lg font-semibold">Oops, there was an error!</h2>
            <button
              className="mt-2 px-4 py-2 bg-red-100 rounded-md hover:bg-red-200"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again
            </button>
          </div>
        )
      )
    }

    return this.props.children
  }
}