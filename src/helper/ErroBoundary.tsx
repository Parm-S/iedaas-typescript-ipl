import React from "react";
import Error from "../page/Error";
class ErrorBoundary extends React.Component {
    state:{
      hasError:boolean
    }
    constructor(props:{}) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
      return { hasError: true };
    }  
    render() {
      if (this.state.hasError) {
        return <Error/>
      }
      return this.props.children; 
    }
  }
  export default ErrorBoundary;