import React, { Component, Fragment } from "react";
import axios from "axios";
import Icon from "./Icon";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import PDFShow from "./ToolbarPdf";
import Toast from "toast-me";
import ReactDOM from "react-dom";
import PdfSample from "../constants/PdfSample";
import "jspdf-autotable";
import jsPDF from "jspdf";
import Button from "react-bootstrap-button-loader";

var pdf = new jsPDF("p", "pt", "a4");

class Pdf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stringbase64: "",
      pdf: "",
      iFrameHeight: "",
      jsonstate: [],
      jsonstateinit: [],
      loading: false
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
  }

  loadreport(json) {
    if (json === [] || json === undefined) json = this.state.jsonstate;
    pdf = new jsPDF("p", "pt", "a4");
    const columns = [
      "id_imp",
      "localita",
      "indirizzo",
      "tp_serv",
      "ult_ver",
      "prox_ver"
    ];
    var rows = [];
    var name = "";
    for (let i = 0; i < json.length; i++) {
      var temp = [
        json[i].id_imp,
        json[i].localita,
        json[i].indirizzo,
        json[i].tp_serv,
        json[i].ult_ver,
        json[i].prox_ver
      ];
      rows.push(temp);
      rows.push(temp);
    }
    var img = new Image();
    img.src = "../logo2.png";
    pdf.addImage(img, "png", 200, 25, 150, 25);
    pdf.setFontSize(16);
    pdf.setFont("Times", "bold");
    pdf.text(225, 75, `Report: ${"Demo"}`);
    pdf.autoTable(columns, rows, {
      startY: 90,
      theme: "grid",
      styles: {
        font: "times",
        cellPadding: 3.5,
        lineWidth: 0.5,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0]
      },
      headStyles: {
        textColor: [0, 0, 0],
        fontStyle: "normal",
        halign: "center",
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        fillColor: [166, 204, 247]
      },
      /*alternateRowStyles: {
        fillColor: [212, 212, 212],
        textColor: [0, 0, 0],
        lineWidth: 0.5,
        lineColor: [0, 0, 0]
      },*/
      margin: { top: 70 },
      columnStyles: {
        5: { halign: "right" }
      },
      didParseCell: function (data) {
        var rows = data.table.body;
        data.cell.styles.lineColor = [0, 0, 0];
        if (data.row.index === rows.length - 1) {
          data.cell.styles.fillColor = [232, 228, 228];
          data.cell.styles.lineColor = [0, 0, 0];
        }
        if (data.row.raw[0] === "Subtotal") {
          data.cell.styles.fillColor = [232, 228, 228];
          data.cell.styles.lineColor = [0, 0, 0];
          data.cell.styles.fontStyle = "bold";
        }
        if (data.row.raw[0] === "Total") {
          data.cell.styles.fillColor = [232, 228, 228];
          data.cell.styles.lineColor = [0, 0, 0];
          data.cell.styles.fontStyle = "bold";
        }
      }
    });
    var pageHeight = pdf.internal.pageSize.height;
    // Before adding new content
    var y = 25; // Height position of new content
    if (y >= pageHeight) {
      pdf.addPage();
      y = 0; // Restart height position
      pdf.addImage(img, "png", 200, 25, 150, 25);
    }

    this.setState({
      iFrameHeight: window.innerHeight - 250 + "px",
      stringbase64: pdf.output("datauristring")
    });
  }

  componentDidMount() {
    const obj = ReactDOM.findDOMNode(this);
    var email = window.sessionStorage.getItem("user");

    var link = "https://keytech-demo-backend.herokuapp.com/api/getdata";
    axios.get(link).then(
      (result) => {
        this.setState({
          jsonstate: result.data,
          jsonstateinit: result.data
        });
        this.loadreport();
      },
      // Nota: è importante gestire gli errori qui
      // invece di un blocco catch() in modo da non fare passare
      // eccezioni da bug reali nei componenti.
      (error) => {
        this.setState({
          //items: []
        });
      }
    );
  }

  downloadPdf = (event) => {
    var that = this;
    this.setState({
      loading: true
    });

    pdf.save("outputFile.pdf");
    this.setState({
      loading: false
    });
    /* var options = {
      //directory: "./images/cats/",
      filename: fileName
    };
    //savior(linkSource.split("base64,")[1], fileName, "pdf");

    var downloadLink = document.createElement("a");
    downloadLink.target = "_blank";
    downloadLink.href =
      "data:application/pdf;base64," + linkSource.split("base64,")[1];
    downloadLink.download = fileName;
    */
    //downloadLink.click();
  };
  /*  zoomPluginInstance = () => {
    console.log(zoomPlugin());
    return zoomPlugin();
  };
*/
  render() {
    var url = PdfSample.base;
    const { month } = this.state;

    return (
      <div>
        <div
          className="center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            className="btn"
            onClick={this.downloadPdf}
            loading={this.state.loading}
            style={{ width: "200px" }}
          >
            {"Download PDF"}
            <Icon
              size={30}
              icon="download"
              style={{ marginTop: "-5px", marginLeft: "10px" }}
              type="color"
            />
          </Button>
        </div>
        {/*<Iframe
          url={this.state.stringbase64} //{url}
          width="100%"
          type="application/pdf"
          title="TS_Ottobre_2021"
          //height="100%"
          id="myId"
          height={this.state.iFrameHeight}
          display="initial"
          position="relative"
        />*/}
        <PDFShow base64={this.state.stringbase64} />
      </div>
    );
  }
}
export default Pdf;
