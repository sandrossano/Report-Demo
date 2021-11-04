import React from "react";

import DataGrid, { Column, MasterDetail } from "devextreme-react/data-grid";
import { Template } from "devextreme-react/core/template";

import Button from "devextreme-react/button";

import service from "./json.js";

const employees = service.getEmployees();

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.calndar = {};
    this.state = {
      visiblePopup: false
    };
  }
  render() {
    return (
      <div>
        <DataGrid
          id={"grid-container"}
          dataSource={employees}
          keyExpr={"ID"}
          showBorders={true}
        >
          <Column dataField={"PlantId"} caption={"Id Impianto"} />
          <Column dataField={"Local"} caption={"Località Fornitura"} />
          <Column dataField={"Addr"} caption={"Indirizzo Fornitura"} />
          <Column dataField={"TpServ"} caption={"Tipo Servizio"} />
          <Column
            dataField={"Last"}
            caption={"Ultima Verifica"}
            //dataType={"date"}
          />
          <Column
            dataField={"Prox"}
            caption={"Prossima Verifica"}
            //dataType={"date"}
          />
          <MasterDetail enabled={true} template={"buttons"} />
          <Template name={"buttons"}>
            <Button
              text={"Edit"}
              onClick={() =>
                this.setState({
                  visiblePopup: !this.state.visiblePopup
                })
              }
              //onClick={this.clickHandler}
            />
          </Template>
        </DataGrid>

        {this.state.visiblePopup && (
          <div>
            <div
              onClick={() =>
                this.setState({
                  visiblePopup: false
                })
              }
              className="popup-overlay"
            ></div>
            <div className="popup">
              <button
                onClick={() =>
                  this.setState({
                    visiblePopup: false
                  })
                }
                className="close-popup"
              ></button>
              <div className="popup__content">
                <span className="labelfield">
                  {new Date().getDate()}-{new Date().getMonth()}-
                  {new Date().getFullYear()}
                </span>
                <br />
                <hr />
                <div style={{ marginBottom: "-20px" }}>
                  {" "}
                  <span className="labelfield">Duration:</span>
                  <div className="center" style={{ display: "inline" }}>
                    <input
                      className="inputdurat"
                      name="duration"
                      type="number"
                      placeholder="hh"
                      value={this.state.hh}
                      onChange={(e) => this.onTodoChange("hh", e.target.value)}
                    />
                    <b>:</b>
                    <input
                      value={this.state.mm}
                      className="inputduratmm"
                      name="duration-mm"
                      type="number"
                      placeholder="mm"
                      onChange={(e) => this.onTodoChange("mm", e.target.value)}
                      //onChange={(e) => this.onTodoChange("1", e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <hr />
                <span className="labelfield">Note:</span>
                <br />
                <textarea
                  className="inputnote"
                  rows="2"
                  onChange={(e) => this.onTodoChange("note", e.target.value)}
                  name="comment"
                  value={this.state.note}
                  placeholder="Inserire testo..."
                ></textarea>
                <br />
                <hr />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div style={{ display: "inline-block" }}>
                    <button
                      name="done"
                      //type="submit"
                      className="editfield"
                      onClick={() => this.editQuery()}
                    >
                      Modifica
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  clickHandler = (e) => {
    console.log("call Edit_Window");
  };
}

export default Products;
