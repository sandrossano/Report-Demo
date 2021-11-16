import React from "react";
import COLORS from "../constants/colors";
import DataGrid, {
  Column,
  MasterDetail,
  HeaderFilter,
  SearchPanel,
  ColumnChooser,
  FilterRow,
  Toolbar,
  Item
} from "devextreme-react/data-grid";
import { Template } from "devextreme-react/core/template";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
//import { exportDataGrid as exportDataGridToPdf } from "devextreme/pdf_exporter";
import Icon from "./Icon";
import Button from "devextreme-react/button";
import service from "./json.js";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormControl, FormControlLabel } from "@material-ui/core";

const employees = service.getEmployees();

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.calndar = {};
    this.state = {
      visiblePopup: false,
      hh: 5,
      date1: "2021-09-01",
      date2: "2026-08-31",
      valueCheck: "full"
    };
  }
  onTodoChange(id, value) {
    if (id === "hh") this.setState({ hh: value });
    if (id === "date1") this.setState({ date1: value });
    if (id === "date2") this.setState({ date2: value });
    console.log(value);
  }
  checkChange(value) {
    this.setState({ valueCheck: value });
    console.log(value);
  }

  render() {
    function cellRender(data) {
      return (
        <Icon
          size={25}
          icon={data.value}
          /*style={{ marginBottom: "5px" }}*/
          color={COLORS.white}
          type="color"
        />
      );
    }
    const filterValue = [
      ["Stato", "<>", "ok"]
      //      "or",
      //      ["Stato", "=", "error--v1"]
    ];
    return (
      <div>
        <div className="checkboxReport">
          <FormControl>
            <RadioGroup
              row
              value={this.state.valueCheck}
              onChange={(e) => this.checkChange(e.target.value)}
            >
              <FormControlLabel
                value="full"
                label="Prossimi 3 Mesi"
                control={<Radio />}
              />
              <FormControlLabel
                value="half"
                label="Future Scadenze"
                control={<Radio />}
              />
              <FormControlLabel value="all" label="Tutti" control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </div>
        <DataGrid
          id={"grid-container"}
          dataSource={employees}
          keyExpr={"ID"}
          columnAutoWidth={false}
          columnHidingEnabled={true}
          showBorders={true}
          allowColumnReordering={true}
          defaultFilterValue={filterValue}
        >
          {/*<SearchPanel visible={true} />*/}
          <HeaderFilter visible={true} />
          <SearchPanel visible={true} width={200} />
          <FilterRow visible={true} />
          <Column
            dataField="Stato"
            width={45}
            allowSorting={false}
            cellRender={cellRender}
            caption={""}
          />
          <Column dataField={"PlantId"} caption={"Id Impianto"} />
          <Column dataField={"Local"} caption={"Località Fornitura"} />
          <Column
            hidingPriority={0}
            dataField={"Addr"}
            caption={"Indirizzo Fornitura"}
          />
          <Column dataField={"TpServ"} caption={"Tipo Servizio"} />
          <Column
            width={90}
            dataField={"Last"}
            caption={"Ultima Verifica"}
            dataType={"date"}
            format="dd/MM/yyyy"
          />
          <Column
            width={90}
            dataField={"Prox"}
            caption={"Prossima Verifica"}
            dataType={"date"}
            format="dd/MM/yyyy"
          />
          <MasterDetail
            enabled={true}
            // component={MasterDetailGrid}
            template={"buttons"}
          />
          <Toolbar>
            {/* <Item location="after">
              <Button
                icon="exportpdf"
                text="Export PDF"
                onClick={(e) => this.exportGrid(e)}
              />
            </Item>*/}
            <Item location="before"></Item>
            <Item>
              <Button
                icon="email"
                text="Send"
                onClick={(e) => this.exportGrid(e)}
              />
            </Item>
            <Item name="columnChooserButton" />
            <Item name="searchPanel" />
          </Toolbar>
          <ColumnChooser enabled={true} mode="select" />
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
  /*  const dataGridRef = React.createRef();
  const exportGrid = React.useCallback(() => {
    const doc = new jsPDF();
    const dataGrid = dataGridRef.current.instance;*/
  clickHandler = (e) => {
    console.log("call Edit_Window");
  };
}

export default Reports;
