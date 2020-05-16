import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
      return (
        <h1>
          Hello from {this.props.compiler} and !
        </h1>
      );
    }
  }