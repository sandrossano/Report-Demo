import React from "react";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
//import { ToolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
var toUint8Array = require("base64-to-uint8array");

type base64 = {
  base64: string;
};

const CustomToolbar = ({ base64 }: base64) => {
  //const { Toolbar } = toolbarPluginInstance;
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js">
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#eeeeee",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          padding: "4px"
        }}
      >
        <ZoomOutButton />
        <ZoomPopover />
        <ZoomInButton />
      </div>
      <Viewer
        plugins={[zoomPluginInstance]}
        fileUrl={toUint8Array(
          base64.substr(
            "data:application/pdf;filename=generated.pdf;base64,".length
          )
        )}
      />
    </Worker>
  );
};

export default CustomToolbar;
