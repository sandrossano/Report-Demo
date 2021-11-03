import React, { Component, Fragment } from "react";
import style from "../style.css";
import { Link } from "react-router-dom";
import Toast from "toast-me";
import ReactDOM from "react-dom";
import PdfSample from "../constants/PdfSample";
import Iframe from "react-iframe";
import PDFViewer from "pdf-viewer-reactjs";
import base64 from "base64topdf";
const download = require("download-pdf");

class Pdf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stringbase64: PdfSample.base,
      pdf: "",
      iFrameHeight: ""
    };

    if (window.sessionStorage.getItem("logged") !== "X") {
      //window.location.href = "/login";
      window.open("/login", "_self");
    } /* else {
      if (window.performance) {
        if (performance.navigation.type == 1) {
          window.open("/", "_self");
        }
      }
    }*/
    window.sessionStorage.getItem("user");

    this.downloadpdf = this.downloadpdf.bind(this);
  }
  componentDidMount() {
    const obj = ReactDOM.findDOMNode(this);
    this.setState({
      iFrameHeight: window.innerHeight - 250 + "px"
    });
  }
  downloadpdf() {
    /*this.setState({
      pdf: base64.base64Decode(this.state.stringbase64, "PdfFileName")
    });*/
    var options = {
      //directory: "./pdfs/ebola/",
      filename: "2014-11-7.pdf"
    };
    /*download(this.state.pdf, "", function (err) {
      if (err) throw err;
      console.log("Error Download Pdf");
    });*/
  }

  render() {
    var url = PdfSample.base;

    return (
      <div>
        {/*<button onClick={this.downloadpdf}>download</button>*/}
        {/*<PDFViewer
          document={{
            url: url
          }}
        />*/}
        <Iframe
          url={url}
          width="100%"
          type="application/pdf"
          //height="100%"
          id="myId"
          height={this.state.iFrameHeight}
          display="initial"
          position="relative"
        />
      </div>
    );
  }
}
export default Pdf;
