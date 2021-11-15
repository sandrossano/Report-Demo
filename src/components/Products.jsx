import React from "react";

import DataGrid, {
  Column,
  MasterDetail,
  HeaderFilter,
  SearchPanel,
  FilterRow
} from "devextreme-react/data-grid";
import { Template } from "devextreme-react/core/template";

import Button from "devextreme-react/button";

import service from "./json.js";

const employees = service.getEmployees();

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.calndar = {};
    this.state = {
      visiblePopup: false,
      hh: 5,
      date1: "2021-09-01",
      date2: "2026-08-31"
    };
  }
  onTodoChange(id, value) {
    if (id === "hh") this.setState({ hh: value });
    if (id === "date1") this.setState({ date1: value });
    if (id === "date2") this.setState({ date2: value });
    console.log(value);
  }
  render() {
    return (
      <div>
        <DataGrid
          id={"grid-container"}
          dataSource={employees}
          keyExpr={"ID"}
          columnAutoWidth={true}
          showBorders={true}
        >
          <SearchPanel visible={true} />
          <HeaderFilter visible={true} />
          <FilterRow visible={true} />
          <Column dataField={"PlantId"} caption={"Id Impianto"} />
          <Column dataField={"Local"} caption={"Località Fornitura"} />
          <Column dataField={"Addr"} caption={"Indirizzo Fornitura"} />
          <Column dataField={"TpServ"} caption={"Tipo Servizio"} />
          <Column
            dataField={"Last"}
            caption={"Ultima Verifica"}
            dataType={"date"}
          />
          <Column
            dataField={"Prox"}
            caption={"Prossima Verifica"}
            dataType={"date"}
          />
          <MasterDetail
            enabled={true}
            // component={MasterDetailGrid}
            template={"buttons"}
          />
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
                <span className="labelfield">Impianto:</span>
                <span>&nbsp; GROTTA AZZURRA</span>
                <br />
                <hr />
                <div style={{ marginBottom: "-20px" }}>
                  <span className="labelfield">Ultima Verifica:</span>
                  &nbsp;
                  <div className="center" style={{ display: "inline" }}>
                    <input
                      className="inputdate"
                      name="duration"
                      type="date"
                      //placeholder="Num. Anni"
                      //width="50px"
                      value={this.state.date1}
                      onChange={(e) =>
                        this.onTodoChange("date1", e.target.value)
                      }
                    />
                  </div>
                </div>
                <br />
                <hr />
                <div style={{ marginBottom: "-20px" }}>
                  <span className="labelfield">Anni Scadenza:</span>
                  &nbsp;
                  <div className="center" style={{ display: "inline" }}>
                    <input
                      className="inputdurat"
                      name="duration"
                      type="number"
                      placeholder="Num. Anni"
                      //width="50px"
                      value={this.state.hh}
                      onChange={(e) => this.onTodoChange("hh", e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <hr />
                <span className="labelfield">Scar. Atm. </span>
                &nbsp;
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <br />
                <hr />
                <div style={{ marginBottom: "-20px" }}>
                  <span className="labelfield">Prossima Verifica:</span>
                  &nbsp;
                  <div className="center" style={{ display: "inline" }}>
                    <input
                      className="inputdate2"
                      name="duration"
                      type="date"
                      //placeholder="Num. Anni"
                      //width="50px"
                      readOnly
                      value={this.state.date2}
                      onChange={(e) =>
                        this.onTodoChange("date2", e.target.value)
                      }
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
