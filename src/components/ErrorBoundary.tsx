import React from "react";

type ErrorBoundaryProps = {
  fallback?: React.ReactNode;
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // Log for debugging in Lovable console
    console.error("3D ErrorBoundary caught: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="h-64 w-full rounded-2xl bg-card/60 border border-border flex items-center justify-center text-muted-foreground">
            3D preview unavailable on this device. Showing fallback.
          </div>
        )
      );
    }

    return this.props.children;
  }
}
