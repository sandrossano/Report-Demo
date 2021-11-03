import React from "react";

import DataGrid, { Column, MasterDetail } from "devextreme-react/data-grid";
import { Template } from "devextreme-react/core/template";

import Button from "devextreme-react/button";

import service from "./json.js";

const employees = service.getEmployees();

class Products extends React.Component {
  render() {
    return (
      <DataGrid
        id={"grid-container"}
        dataSource={employees}
        keyExpr={"ID"}
        showBorders={true}
      >
        <Column dataField={"Prefix"} width={70} caption={"Title"} />
        <Column dataField={"FirstName"} />
        <Column dataField={"LastName"} />
        <Column dataField={"Position"} width={170} />
        <Column dataField={"State"} width={125} />
        <Column dataField={"BirthDate"} dataType={"date"} />
        <MasterDetail enabled={true} template={"buttons"} />
        <Template name={"buttons"}>
          <Button text={"Edit"} onClick={this.clickHandler} />
        </Template>
      </DataGrid>
    );
  }
  clickHandler = (e) => {
    console.log("call Edit_Window");
  };
}

export default Products;
