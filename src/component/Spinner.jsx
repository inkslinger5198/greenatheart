import React, { Component } from "react";
import { ThreeDots } from "@agney/react-loading";
import "./Spinner.css";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <ThreeDots
        className="spinner"
          visible={true}
          height="80"
          width="80"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
}

export default Spinner;
