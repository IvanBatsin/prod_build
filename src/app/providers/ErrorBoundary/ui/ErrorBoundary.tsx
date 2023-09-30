import React, { type ReactNode, type ErrorInfo, Suspense } from "react";
import { PageError } from "@/[object Object]";

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError (error: ErrorInfo): ErrorBoundaryState | undefined {
    if (error) {
      return { hasError: true };
    }
    return undefined;
  };

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render (): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Suspense fallback>
          <PageError/>
        </Suspense>
      );
    }

    return children;
  }
}
